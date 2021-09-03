import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const SEARCH_MODULES = gql`
  query getAllModules($searchText: String) {
    module(order_by: {name: asc}, where: { name: { _ilike: $searchText }}) {
		description
		id
		name
	}
  }
`

export const useSearchModules = () => {
	const [u, setU] = useState()

    const {data,...result } = useQuery(SEARCH_MODULES, {variables: { ...u }})
  
    const search = useDebouncedCallback((searchText) => {
		if (searchText) setU({ searchText: `%${searchText}%` })
		else setU(null)
    }, 500)

    const modules = data?.module
    return { search, modules, ...result }
}

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

export const useEdit = () => {
	const [edit, result] = useMutation(
		gql`
			mutation edit($id: uuid!, $module: module_set_input) {
				update_module_by_pk(pk_columns: { id: $id }, _set: $module) {
					description
					id
					name
				}
			}
		`,
	)

	return [(module, id) => edit({ variables: { id, module } }), result]
}

export const useDeleteModuleById = () => {
	const [deleteModuleById, { loading, data }] = useMutation(
		gql`
			mutation deleteModuleById($id: uuid!) {
				delete_module_by_pk(id: $id) {
					id
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

	return [
		(id) => deleteModuleById({ variables: { id } }),
		{ loading, module: data?.delete_module_by_pk },
	]
}

export const useDeleteModules = () => {
	const [deleteModules, { loading, data }] = useMutation(
		gql`
			mutation deleteModules {
				delete_module(where: {}) {
					affected_rows
				}
			}
		`,
	)

	return [deleteModules, { loading, module: data?.delete_module }]
}

