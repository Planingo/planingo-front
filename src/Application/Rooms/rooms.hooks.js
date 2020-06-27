import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const useGetAllRooms = () => {
	const result = useQuery(gql`
		query getAllRooms {
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
