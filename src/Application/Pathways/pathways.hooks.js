import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { isNil } from 'lodash'

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

export const useGetPathwayById = (id) => {
	const { loading, data } = useQuery(
		gql`
			query getPathwayById($id: uuid!) {
				pathway_by_pk(id: $id) {
					id
					name
				}
			}
		`,
		{ variables: { id: id }, skip: isNil(id) },
	)
	return { loadingPathway: loading, pathway: data?.pathway_by_pk }
}
