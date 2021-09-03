import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const SEARCH_STUDENTS = gql`
  query getAllStudents($searchText: String, $searchText2: String) {
    student(order_by: {lastName: asc}, where: {
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
    	apprenticeships {
			company {
				id
				name
			}
			id
		}
		created_at
		firstName
		id
		lastName
		pathway {
			id
			name
		}
    }
  }
`

export const useSearchStudents = () => {
	const [u, setU] = useState()

    const {data,...result } = useQuery(SEARCH_STUDENTS, {variables: { ...u }})
  
    const search = useDebouncedCallback((searchText) => {
		const searchsTmp = searchText.split(" ").map(st => `%${st}%`)
		if (searchText) setU({ searchText: searchsTmp[0], searchText2: searchsTmp[1] })
		else setU(null)
    }, 500)

    const students = data?.student
    return { search, students, ...result }
}


const getStudentsQuerie = gql`
	query getAllStudents {
		student(order_by: { lastName: asc }) {
			apprenticeships {
				company {
					id
					name
				}
				id
			}
			created_at
			firstName
			id
			lastName
			pathway {
				id
				name
			}
		}
	}
`

export const useGetAllStudents = () => {
	const result = useQuery(getStudentsQuerie)
	return result
}

export const useGetStudentById = (id) => {
	const { loading, data } = useQuery(
		gql`
			query getStudentById($id: uuid!) {
				student_by_pk(id: $id) {
					apprenticeships {
						company {
							id
							name
							description
						}
						companyId
						id
						studentId
					}
					firstName
					id
					lastName
					pathway {
						description
						id
						name
					}
				}
			}
		`,
		{ variables: { id: id } },
	)
	return { loading, student: data?.student_by_pk }
}

export const useAddStudent = () => {
	const [addStudent, result] = useMutation(
		gql`
			mutation addStudent($student: student_insert_input!) {
				insert_student_one(object: $student) {
					apprenticeships {
						company {
							id
							name
						}
						id
					}
					created_at
					firstName
					id
					lastName
					pathway {
						id
						name
					}
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getStudentsQuerie,
				},
			],
		},
	)

	return [(student) => addStudent({ variables: { student } }), result]
}

export const useAddStudents = () => {
	const [addStudents, result] = useMutation(
		gql`
			mutation addStudents($students: [student_insert_input!]!) {
				insert_student(objects: $students) {
					affected_rows
				}
			}
		`,
	)

	return [(students) => addStudents({ variables: { students } }), result]
}

export const useEdit = () => {
	const [edit, result] = useMutation(
		gql`
			mutation edit($id: uuid!, $student: student_set_input) {
				update_student_by_pk(pk_columns: { id: $id }, _set: $student) {
					apprenticeships {
						company {
							id
							name
							description
						}
						companyId
						id
						studentId
					}
					firstName
					id
					lastName
					pathway {
						description
						id
						name
					}
				}
			}
		`,
	)

	return [(student, id) => edit({ variables: { id, student } }), result]
}

export const useDeleteStudentById = () => {
	const [deleteStudentById, { loading, data }] = useMutation(
		gql`
			mutation deleteStudentById($id: uuid!) {
				delete_student_by_pk(id: $id) {
					id
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getStudentsQuerie,
				},
			],
		},
	)

	return [
		(id) => deleteStudentById({ variables: { id } }),
		{ loading, student: data?.delete_student_by_pk },
	]
}
