import { useMutation, useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const getStudentsQuerie = gql`
	query getAllStudents {
		student(order_by: { lastName: asc }) {
			firstName
			lastName
			id
			pathway {
				name
				id
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
					pathway {
						name
						id
					}
					firstName
					id
					lastName
					pathwayId
					apprenticeships {
						id
						company {
							id
							name
						}
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
					id
					firstName
					lastName
					pathwayId
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
