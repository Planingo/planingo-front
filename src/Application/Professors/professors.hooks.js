import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const SEARCH_PROFESSORS = gql`
  query getAllProfessors($searchText: String, $searchText2: String) {
    professor(order_by: {lastName: asc}, where: {
      _or: [
        {
            firstName: {
              _ilike: $searchText
            },
            lastName: {
              _ilike: $searchText2
            }
        },
        {
            firstName: {
              _ilike: $searchText2
            },
            lastName: {
              _ilike: $searchText
            },
        }
	]}) {
		firstName
		id
		lastName
		modules {
			id
			module {
				id
				name
				description
			}
		}
	}
  }
`

export const useSearchProfessors = () => {
	const [u, setU] = useState()

    const {data,...result } = useQuery(SEARCH_PROFESSORS, {variables: { ...u }})
  
    const search = useDebouncedCallback((searchText) => {
		const searchsTmp = searchText.split(" ").map(st => `%${st}%`)
		if (searchText) setU({ searchText: searchsTmp[0], searchText2: searchsTmp[1] })
		else setU(null)
    }, 500)

    const professors = data?.professor
    return { search, professors, ...result }
}

const getProfessorsQuerie = gql`
	query getAllProfessors {
		professor(order_by: { lastName: asc }) {
			firstName
			id
			lastName
			modules {
				id
				module {
					id
					name
					description
				}
			}
		}
	}
`

export const useGetAllProfessors = () => {
	const result = useQuery(getProfessorsQuerie)
	return result
}

export const useGetProfessorById = (id) => {
	const { loading, data } = useQuery(
		gql`
			query getProfessorsById($id: uuid!) {
				professor_by_pk(id: $id) {
					firstName
					id
					lastName
					modules {
						id
						module {
							description
							id
							name
						}
					}
				}
			}
		`,
		{ variables: { id: id } },
	)
	return { loading, professor: data?.professor_by_pk }
}

export const useAddProfessor = () => {
	const [addProfessor, result] = useMutation(
		gql`
			mutation addProfessor($professor: professor_insert_input!) {
				insert_professor_one(object: $professor) {
					firstName
					id
					lastName
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getProfessorsQuerie,
				},
			],
		},
	)

	return [(professor) => addProfessor({ variables: { professor } }), result]
}

export const useEdit = () => {
	const [edit, result] = useMutation(
		gql`
			mutation edit($id: uuid!, $professor: professor_set_input) {
				update_professor_by_pk(pk_columns: { id: $id }, _set: $professor) {
					firstName
					id
					lastName
				}
			}
		`,
	)

	return [
		(professor, id) => edit({ variables: { id, professor } }),
		result,
	]
}

export const useDeleteProfessorById = () => {
	const [deleteProfessorById, { loading, data }] = useMutation(
		gql`
			mutation deleteProfessorById($id: uuid!) {
				delete_professor_by_pk(id: $id) {
					id
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getProfessorsQuerie,
				},
			],
		},
	)

	return [
		(id) => deleteProfessorById({ variables: { id } }),
		{ loading, company: data?.delete_professor_by_pk },
	]
}
