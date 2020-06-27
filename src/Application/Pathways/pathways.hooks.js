import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const useGetAllPathways = () => {
	const result = useQuery(gql`
		query getAllPathways {
			pathway(order_by: { id: asc }) {
				description
				id
				name
			}
		}
	`)
	return result
}
