import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const useGetAllCompagnies = () => {
	const result = useQuery(gql`
		query getAllCompagnies {
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
