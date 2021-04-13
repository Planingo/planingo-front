import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const moduleConstraintsFragment = gql`
    fragment moduleConstraintsFragment on setting_constraints_module {
        id,
        accountId,
        breakable,
        moduleMandatory,
        moduleOptionnal,
    }
`

export function useModuleConstraints(accountId) {
    const {data, loading} = useQuery(
        MODULE_CONSTRAINTS,
        {
            variables: { accountId: accountId },
        },
    )
    return {data: data?.setting_constraints_module[0], loading}
}
  
const MODULE_CONSTRAINTS = gql`
    query moduleConstraints($accountId: uuid!) {
        setting_constraints_module(where: {accountId: {_eq: $accountId}}) {
            id
            ...moduleConstraintsFragment
        }
    }
    ${moduleConstraintsFragment}
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
                ...moduleConstraintsFragment
            }
        }
    }
    ${moduleConstraintsFragment}
`

export const useCreateModuleConstraintsSetting = () => {
	const [createModuleConstraintsSettings] = useMutation(
        MODULE_CONSTRAINTS_CREATE_MUTATION
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

const MODULE_CONSTRAINTS_CREATE_MUTATION = gql`
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
