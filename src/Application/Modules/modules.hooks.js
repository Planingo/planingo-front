import { useMutation, useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const getModulesQuerie = gql`
	query getAllModules {
		module(order_by: { name: asc }) {
			description
			id
			name
		}
	}
`

export const useGetAllModules = () => {
	const result = useQuery(getModulesQuerie)
	return result
}

export const useGetModuleById = (id) => {
	const { loading, data } = useQuery(
		gql`
			query getModulesById($id: uuid!) {
				module_by_pk(id: $id) {
					description
					id
					name
				}
			}
		`,
		{ variables: { id: id } },
	)
	return { loading, module: data?.module_by_pk }
}

export const useAddModule = () => {
	const [addModule, result] = useMutation(
		gql`
			mutation addModule($module: module_insert_input!) {
				insert_module_one(object: $module) {
					description
					id
					name
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getModulesQuerie,
				},
			],
		},
	)

	return [(module) => addModule({ variables: { module } }), result]
}

export const useEditModule = () => {
	const [editModule, result] = useMutation(
		gql`
			mutation editModule($id: uuid!, $module: module_set_input) {
				update_module_by_pk(pk_columns: { id: $id }, _set: $module) {
					description
					id
					name
				}
			}
		`,
	)

	return [(module, id) => editModule({ variables: { id, module } }), result]
}
