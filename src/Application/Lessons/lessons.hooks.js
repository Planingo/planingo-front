import { useMutation, useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

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

export const useEditLesson = () => {
	const [editLesson, result] = useMutation(
		gql`
			mutation editLesson($id: uuid!, $lesson: lesson_set_input) {
				update_lesson_by_pk(pk_columns: { id: $id }, _set: $lesson) {
					description
					id
					name
				}
			}
		`,
	)

	return [(lesson, id) => editLesson({ variables: { id, lesson } }), result]
}
