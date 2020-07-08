import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const useGetAllRooms = () => {
	useQuery(gql`
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
