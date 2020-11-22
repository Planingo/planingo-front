import { useMutation, useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const getStudentsQuerie = gql`
	query getAllStudents {
		student(order_by: { lastName: asc }) {
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

export const useEditStudent = () => {
	const [editStudent, result] = useMutation(
		gql`
			mutation editStudent($id: uuid!, $student: student_set_input) {
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

	return [(student, id) => editStudent({ variables: { id, student } }), result]
}
