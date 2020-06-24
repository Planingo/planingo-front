import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const useGetAllProfessors = () => {
	const result = useQuery(gql`
		query getAllProfessors {
			professor(order_by: { firstName: asc }) {
				firstName
				id
				lastName
				modules {
					id
					module {
						id
						name
					}
				}
			}
		}
	`)
	return result
}
