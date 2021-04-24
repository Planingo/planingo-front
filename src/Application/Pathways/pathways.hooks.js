import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useCallback } from 'react'

const getPathwaysQuerie = gql`
	query getAllPathways {
		pathway(order_by: { name: asc }) {
			description
			id
			name
		}
	}
`

export const constraintsPrerequisModuleFragment = gql`
    fragment constraintsPrerequisModuleFragment on contraints_prerequis_module {
        id,
        created_at,
        updated_at,
        moduleId,
        pathwayId,
        order,
    }
`

export const useGetModulesByOrder = (id) => {
	const {loading, data} = useQuery(MODULES_BY_ORDER, 
		{
			variables: {
				id: id
			}
		})
	return {loading, data: data?.contraints_prerequis_module}
}

const MODULES_BY_ORDER = gql`
	query getModulesByOrder($id: uuid!) {
		contraints_prerequis_module(where: {pathwayId: {_eq: $id}}, order_by: {order: asc}) {
			...constraintsPrerequisModuleFragment
		}
	}
	${constraintsPrerequisModuleFragment}
`

export const useUpdateModuleOrderByPathway = () => {
	const [updateModuleOrderByPathway, result] = useMutation(
        UPDATE_MODULE_ORDER_BY_PATHWAY
    )

	return [useCallback((moduleId, pathwayId, order) =>
		updateModuleOrderByPathway({
			variables: {
				moduleId: moduleId,
				pathwayId: pathwayId,
				order: order,
			}
    }), [updateModuleOrderByPathway]), result]
}

const UPDATE_MODULE_ORDER_BY_PATHWAY = gql`
	mutation updateModuleOrderByPathway($moduleId: uuid!, $pathwayId: uuid!, $order: Int!) {
		insert_contraints_prerequis_module_one(
			object: {
				moduleId: $moduleId, order: $order, pathwayId: $pathwayId
			}, 
			on_conflict: {
				constraint: contraints_prerequis_module_moduleId_pathwayId_key, 
				update_columns: order
			}) {
			id
			moduleId
			order
		}
	}
`

export const useGetAllPathways = () => {
	const result = useQuery(getPathwaysQuerie)
	return result
}

export const useGetPathwayById = (id) => {
	const { loading, data } = useQuery(
		gql`
			query getPathwaysById($id: uuid!) {
				pathway_by_pk(id: $id) {
					created_at
					description
					id
					name
					updated_at
					modules {
						module {
							created_at
							description
							id
							name
							updated_at
						}
						id
					}
				}
			}
		`,
		{ variables: { id: id } },
	)
	return { loading, pathway: data?.pathway_by_pk }
}

export const useAddPathway = () => {
	const [addPathway, result] = useMutation(
		gql`
			mutation addPathway($pathway: pathway_insert_input!) {
				insert_pathway_one(object: $pathway) {
					description
					id
					name
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getPathwaysQuerie,
				},
			],
		},
	)

	return [(pathway) => addPathway({ variables: { pathway } }), result]
}

export const useEditPathway = () => {
	const [editPathway, result] = useMutation(
		gql`
			mutation editPathway($id: uuid!, $pathway: pathway_set_input) {
				update_pathway_by_pk(pk_columns: { id: $id }, _set: $pathway) {
					description
					id
					name
				}
			}
		`,
	)

	return [(pathway, id) => editPathway({ variables: { id, pathway } }), result]
}

export const useDeletePathwayById = () => {
	const [deletePathwayById, { loading, data }] = useMutation(
		gql`
			mutation deletePathwayById($id: uuid!) {
				delete_pathway_by_pk(id: $id) {
					id
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getPathwaysQuerie,
				},
			],
		},
	)

	return [
		(id) => deletePathwayById({ variables: { id } }),
		{ loading, company: data?.delete_pathway_by_pk },
	]
}

export function useGetModulesByPathwayId(pathwayId) {
    const {data, loading} = useQuery(
        MODULES_BY_PATHWAY_ID,
      {
        variables: { pathwayId: pathwayId },
      },
    )

    return {
		data: data?.module.map(d => (
			{
			order: d?.contraints_prerequis_modules[0]?.order,
			id: d.id,
			name: d.name
		}))?.sort((obj1, obj2) => obj1?.order - obj2?.order), 
		loading
	}
}
  
const MODULES_BY_PATHWAY_ID = gql`
    query getPathwayConstraints($pathwayId: uuid!) {
		module {
			contraints_prerequis_modules(where: {pathwayId: {_eq: $pathwayId}}) {
				id
				order
			}
			id
			name
		}
    }
`