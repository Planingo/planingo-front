import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const moduleConstraintsSettingFragment = gql`
    fragment moduleConstraintsSettingFragment on setting_constraints_module {
        id,
        accountId,
        breakable,
        moduleMandatory,
        moduleOptionnal,
    }
`

export const moduleConstraintsFragment = gql`
    fragment moduleConstraintsFragment on module_constraints {
		moduleId
		constraints
    }
`

export function useModuleConstraintsSetting(accountId) {
    const {data, loading} = useQuery(
        MODULE_CONSTRAINTS_SETTING,
        {
            variables: { accountId: accountId },
        },
    )
    return {data: data?.setting_constraints_module[0], loading}
}
  
const MODULE_CONSTRAINTS_SETTING = gql`
    query moduleConstraints($accountId: uuid!) {
        setting_constraints_module(where: {accountId: {_eq: $accountId}}) {
            id
            ...moduleConstraintsSettingFragment
        }
    }
    ${moduleConstraintsSettingFragment}
`

export function useUpdateModuleConstraints(accountId, input) {
    const [updateModuleConstraints, result] = useMutation(
            MODULE_CONTRAINTS_UPDATE_MUTATION,
        )
    return [(accountId, input) => updateModuleConstraints({ variables: { accountId, input } }), result]
}

const MODULE_CONTRAINTS_UPDATE_MUTATION = gql`
    mutation updateModuleConstraints($accountId: uuid!, $input: setting_constraints_module_set_input) {
        update_setting_constraints_module(where: {accountId: {_eq: $accountId}}, _set: $input) {
            affected_rows
            returning {
                ...moduleConstraintsSettingFragment
            }
        }
    }
    ${moduleConstraintsSettingFragment}
`

export const useCreateModuleConstraintsSetting = () => {
	const [createModuleConstraintsSettings] = useMutation(
        MODULE_CONSTRAINTS_SETTING_CREATE_MUTATION
    )
	return accountId =>
    createModuleConstraintsSettings({
        variables: {
            breakable: true,
            accountId: accountId,
            moduleOptionnal: true,
            moduleMandatory: true,
        },
    })
}

const MODULE_CONSTRAINTS_SETTING_CREATE_MUTATION = gql`
    mutation createModuleConstraintsSettings($breakable: Boolean!, $accountId: uuid!, $moduleMandatory: Boolean!, $moduleOptionnal: Boolean!) {
        insert_setting_constraints_module_one(
            object: {
                breakable: $breakable
                accountId: $accountId
                moduleMandatory: $moduleMandatory
                moduleOptionnal: $moduleOptionnal
            }
        ) {
            id
        }
    }
`

export const useEditModuleConstraints = () => {
	const [editModuleConstraints, result] = useMutation(
        MODULE_CONSTRAINTS_EDIT_MUTATION
    )

	return [(constraints, moduleId) =>
		editModuleConstraints({
			variables: {
				moduleId: moduleId,
				constraints: constraints,
			}
    }), result]
}

const MODULE_CONSTRAINTS_EDIT_MUTATION = gql`
    mutation editModuleConstraints(
		$moduleId: uuid!, 
		$constraints: jsonb!,
	) {
        insert_module_constraints_one(
            object: {
                moduleId: $moduleId,
                constraints: $constraints
            },
			on_conflict: {
				where: {
					moduleId: {
						_eq: $moduleId
					}
				}, 
				update_columns: constraints, 
				constraint: module_constraints_moduleId_key
			}
        ) {
            id,
			constraints
        }
    }
`

export function useGetModuleConstraints(moduleId) {
    const {data, loading} = useQuery(
        MODULE_CONSTRAINTS,
      {
        variables: { moduleId: moduleId },
      },
    )

    return {data: data?.module_constraints[0], loading}
}
  
const MODULE_CONSTRAINTS = gql`
    query getModuleConstraints($moduleId: uuid!) {
        module_constraints(where: {moduleId: {_eq: $moduleId}}) {
            id
            ...moduleConstraintsFragment
        }
    }
    ${moduleConstraintsFragment}
`

