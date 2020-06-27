import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const useGetAllStudents = () => {
	const result = useQuery(gql`
		query getAllStudents {
			student(order_by: { firstName: asc }) {
				firstName
				lastName
				id
				pathway {
					name
					id
				}
			}
		}
	`)
	return []
}
