import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const companyConstraintsSettingFragment = gql`
    fragment companyConstraintsSettingFragment on setting_constraints_company {
        id,
        accountId,
        maxSchoolSession,
        minSchoolSession,
        maxCompanySession,
        minCompanySession,
        schoolMandatory,
        companyMandatory,
    }
`

export const companyConstraintsFragment = gql`
    fragment companyConstraintsFragment on company_constraints {
		companyId
		constraints
    }
`

export function useCompanyConstraintsSetting(accountId) {
    const {data, loading} = useQuery(
        COMPANY_CONSTRAINTS_SETTING,
      {
        variables: { accountId: accountId },
      },
    )
    return {data: data?.setting_constraints_company[0], loading}
}
  
const COMPANY_CONSTRAINTS_SETTING = gql`
    query companyConstraints($accountId: uuid!) {
        setting_constraints_company(where: {accountId: {_eq: $accountId}}) {
            id
            ...companyConstraintsSettingFragment
        }
    }
    ${companyConstraintsSettingFragment}
`

export function useUpdateCompanyConstraintsSetting(accountId, input) {
    const [updateCompanyConstraintsSetting, result] = useMutation(
            COMPANY_CONTRAINTS_SETTING_UPDATE_MUTATION,
        )
    return [(accountId, input) => updateCompanyConstraintsSetting({ variables: { accountId, input } }), result]
}

const COMPANY_CONTRAINTS_SETTING_UPDATE_MUTATION = gql`
    mutation updateCompanyConstraints($accountId: uuid!, $input: setting_constraints_company_set_input) {
        update_setting_constraints_company(where: {accountId: {_eq: $accountId}}, _set: $input) {
            affected_rows
            returning {
                ...companyConstraintsSettingFragment
            }
        }
    }
    ${companyConstraintsSettingFragment}
`

export const useCreateCompanyConstraintsSetting = () => {
	const [createCompanyConstraintsSettings] = useMutation(
        COMPANY_CONSTRAINTS_SETTING_CREATE_MUTATION
    )
	return accountId =>
    createCompanyConstraintsSettings({
        variables: {
            accountId: accountId,
            maxSchoolSession: true,
            minSchoolSession: true,
            maxCompanySession: true,
            minCompanySession: true,
            schoolMandatory: true,
            companyMandatory: true,
        },
    })
}

const COMPANY_CONSTRAINTS_SETTING_CREATE_MUTATION = gql`
    mutation createCompanyConstraintsSettings($maxSchoolSession: Boolean!, $accountId: uuid!, $minSchoolSession: Boolean!, $maxCompanySession: Boolean!, $minCompanySession: Boolean!, $schoolMandatory: Boolean, $companyMandatory: Boolean) {
        insert_setting_constraints_company_one(
            object: {
                maxSchoolSession: $maxSchoolSession
                accountId: $accountId
                minSchoolSession: $minSchoolSession
                maxCompanySession: $maxCompanySession
                minCompanySession: $minCompanySession
                schoolMandatory: $schoolMandatory
                companyMandatory: $companyMandatory
            }
        ) {
            id
        }
    }
`

export const useEditCompanyConstraints = () => {
	const [editCompanyConstraints, result] = useMutation(
        COMPANY_CONSTRAINTS_EDIT_MUTATION
    )

	return [(constraints, companyId) =>
		editCompanyConstraints({
			variables: {
				companyId: companyId,
				constraints: constraints,
			}
    }), result]
}

const COMPANY_CONSTRAINTS_EDIT_MUTATION = gql`
    mutation editCompanyConstraints(
		$companyId: uuid!, 
		$constraints: jsonb!,
	) {
        insert_company_constraints_one(
            object: {
                companyId: $companyId,
                constraints: $constraints
            },
			on_conflict: {
				where: {
					companyId: {
						_eq: $companyId
					}
				}, 
				update_columns: constraints, 
				constraint: company_constraints_companyId_key
			}
        ) {
            id,
			constraints
        }
    }
`

export function useGetCompanyConstraints(companyId) {
    const {data, loading} = useQuery(
        COMPANY_CONSTRAINTS,
      {
        variables: { companyId: companyId },
      },
    )

    return {data: data?.company_constraints[0], loading}
}
  
const COMPANY_CONSTRAINTS = gql`
    query getCompanyConstraints($companyId: uuid!) {
        company_constraints(where: {companyId: {_eq: $companyId}}) {
            id
            ...companyConstraintsFragment
        }
    }
    ${companyConstraintsFragment}
`
