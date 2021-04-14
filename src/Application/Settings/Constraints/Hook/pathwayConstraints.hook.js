import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const pathwayConstraintsFragment = gql`
    fragment pathwayConstraintsFragment on setting_constraints_pathway {
        id,
        schoolPlace,
        maxSchool,
        minSchool,
        maxPathway,
        minPathway,
        maxSchoolSession,
        minSchoolSession,
        maxCompanySession,
        minCompanySession,
        schoolMandatory,
        companyMandatory,
        accountId,
    }
`

export function usePathwayConstraints(accountId) {
    const {data, loading} = useQuery(
        PATHWAY_CONSTRAINTS,
      {
        variables: { accountId: accountId },
      },
    )
    return {data: data?.setting_constraints_pathway[0], loading}
}
  
const PATHWAY_CONSTRAINTS = gql`
    query pathwayConstraints($accountId: uuid!) {
        setting_constraints_pathway(where: {accountId: {_eq: $accountId}}) {
            id
            ...pathwayConstraintsFragment
        }
    }
    ${pathwayConstraintsFragment}
`

export function useUpdatePathwayConstraints(accountId, input) {
    const [updatePathwayConstraints, result] = useMutation(
            PATHWAY_CONTRAINTS_UPDATE_MUTATION,
        )
    return [(accountId, input) => updatePathwayConstraints({ variables: { accountId, input } }), result]
}

const PATHWAY_CONTRAINTS_UPDATE_MUTATION = gql`
    mutation updatePathwayConstraints($accountId: uuid!, $input: setting_constraints_pathway_set_input) {
        update_setting_constraints_pathway(where: {accountId: {_eq: $accountId}}, _set: $input) {
            affected_rows
            returning {
                ...pathwayConstraintsFragment
            }
        }
    }
    ${pathwayConstraintsFragment}
`

export const useCreatePathwayConstraintsSetting = () => {
	const [createPathwayConstraintsSettings] = useMutation(
        PATHWAY_CONSTRAINTS_CREATE_MUTATION
    )
	return accountId =>
    createPathwayConstraintsSettings({
        variables: {
            schoolPlace: true,
            accountId: accountId,
            maxSchool: true,
            minSchool: true,
            maxPathway: true,
            minPathway: true,
            maxSchoolSession: true,
            minSchoolSession: true,
            maxCompanySession: true,
            minCompanySession: true,
            schoolMandatory: true,
            companyMandatory: true,
        },
    })
}

const PATHWAY_CONSTRAINTS_CREATE_MUTATION = gql`
    mutation createPathwayConstraintsSettings(
        $schoolPlace: Boolean!, 
		$accountId: uuid!, 
		$maxSchool: Boolean!,
		$minSchool: Boolean!, 
		$maxPathway: Boolean!,
		$minPathway: Boolean!, 
		$maxSchoolSession: Boolean!,
		$minSchoolSession: Boolean!, 
		$maxCompanySession: Boolean!,
		$minCompanySession: Boolean!, 
		$schoolMandatory: Boolean!,
		$companyMandatory: Boolean!,
    ) {
        insert_setting_constraints_pathway_one(
            object: {
                schoolPlace: $schoolPlace
                accountId: $accountId
                maxSchool: $maxSchool
                minSchool: $minSchool
                maxPathway: $maxPathway
                minPathway: $minPathway
                maxSchoolSession: $maxSchoolSession
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
