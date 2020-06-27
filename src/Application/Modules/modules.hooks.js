import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const useGetAllModules = () => {
	const result = useQuery(gql`
		query getAllModules {
			module(order_by: { id: asc }) {
				name
				id
				description
			}
		}
	`)
	return result
}
