import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const companyConstraintsFragment = gql`
    fragment companyConstraintsFragment on setting_constraints_company {
        id,
        accountId,
        maxSchoolSession,
        minSchoolSession,
        maxCompanySession,
        minCompanySession,
    }
`

export function useCompanyConstraints(accountId) {
    const {data, loading} = useQuery(
        COMPANY_CONSTRAINTS,
      {
        variables: { accountId: accountId },
      },
    )
    return {data: data?.setting_constraints_company[0], loading}
}
  
const COMPANY_CONSTRAINTS = gql`
    query companyConstraints($accountId: uuid!) {
        setting_constraints_company(where: {accountId: {_eq: $accountId}}) {
            id
            ...companyConstraintsFragment
        }
    }
    ${companyConstraintsFragment}
`

export function useUpdateCompanyConstraints(accountId, input) {
    const [updateCompanyConstraints, result] = useMutation(
            COMPANY_CONTRAINTS_UPDATE_MUTATION,
        )
    return [(accountId, input) => updateCompanyConstraints({ variables: { accountId, input } }), result]
}

const COMPANY_CONTRAINTS_UPDATE_MUTATION = gql`
    mutation updateCompanyConstraints($accountId: uuid!, $input: setting_constraints_company_set_input) {
        update_setting_constraints_company(where: {accountId: {_eq: $accountId}}, _set: $input) {
            affected_rows
            returning {
                ...companyConstraintsFragment
            }
        }
    }
    ${companyConstraintsFragment}
`

export const useCreateCompanyConstraintsSetting = () => {
	const [createCompanyConstraintsSettings] = useMutation(
        COMPANY_CONSTRAINTS_CREATE_MUTATION
    )
	return accountId =>
    createCompanyConstraintsSettings({
        variables: {
            accountId: accountId,
            maxSchoolSession: true,
            minSchoolSession: true,
            maxCompanySession: true,
            minCompanySession: true,
        },
    })
}

const COMPANY_CONSTRAINTS_CREATE_MUTATION = gql`
    mutation createCompanyConstraintsSettings($maxSchoolSession: Boolean!, $accountId: uuid!, $minSchoolSession: Boolean!, $maxCompanySession: Boolean!, $minCompanySession: Boolean!) {
        insert_setting_constraints_company_one(
            object: {
                maxSchoolSession: $maxSchoolSession
                accountId: $accountId
                minSchoolSession: $maxSchoolSession
                maxCompanySession: $maxSchoolSession
                minCompanySession: $minCompanySession
            }
        ) {
            id
        }
    }
`
