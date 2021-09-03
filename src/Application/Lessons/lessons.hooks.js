import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const SEARCH_LESSONS = gql`
  query getAllLessons($searchText: String) {
    lesson(order_by: {name: asc}, where: { name: { _ilike: $searchText }}) {
		description
		id
		name
	}
  }
`

export const useSearchLessons = () => {
	const [u, setU] = useState()

    const {data,...result } = useQuery(SEARCH_LESSONS, {variables: { ...u }})
  
    const search = useDebouncedCallback((searchText) => {
		if (searchText) setU({ searchText: `%${searchText}%` })
		else setU(null)
    }, 500)

    const lessons = data?.lesson
    return { search, lessons, ...result }
}

const getLessonsQuerie = gql`
	query getAllLessons {
		lesson(order_by: { name: asc }) {
			description
			id
			name
		}
	}
`

export const useGetAllLessons = () => {
	const result = useQuery(getLessonsQuerie)
	return result
}

export const useGetLessonById = (id) => {
	const { loading, data } = useQuery(
		gql`
			query getLessonsById($id: uuid!) {
				lesson_by_pk(id: $id) {
					description
					id
					name
				}
			}
		`,
		{ variables: { id: id } },
	)
	return { loading, lesson: data?.lesson_by_pk }
}

export const useAddLesson = () => {
	const [addLesson, result] = useMutation(
		gql`
			mutation addLesson($lesson: lesson_insert_input!) {
				insert_lesson_one(object: $lesson) {
					description
					id
					name
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getLessonsQuerie,
				},
			],
		},
	)

	return [(lesson) => addLesson({ variables: { lesson } }), result]
}

export const useEdit = () => {
	const [edit, result] = useMutation(
		gql`
			mutation edit($id: uuid!, $lesson: lesson_set_input) {
				update_lesson_by_pk(pk_columns: { id: $id }, _set: $lesson) {
					description
					id
					name
				}
			}
		`,
	)

	return [(lesson, id) => edit({ variables: { id, lesson } }), result]
}

export const useDeleteLessonById = () => {
	const [deleteLessonById, { loading, data }] = useMutation(
		gql`
			mutation deleteLessonById($id: uuid!) {
				delete_lesson_by_pk(id: $id) {
					id
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getLessonsQuerie,
				},
			],
		},
	)

	return [
		(id) => deleteLessonById({ variables: { id } }),
		{ loading, company: data?.delete_lesson_by_pk },
	]
}
