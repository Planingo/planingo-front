import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const pathwayConstraintsSettingFragment = gql`
    fragment pathwayConstraintsSettingFragment on setting_constraints_pathway {
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
        moduleMandatory,
        moduleOptionnal,
        accountId,
    }
`

export const pathwayConstraintsFragment = gql`
    fragment pathwayConstraintsFragment on pathway_constraints {
		pathwayId
		constraints
    }
`

export function usePathwayConstraintsSetting(accountId) {
    const {data, loading} = useQuery(
        PATHWAY_CONSTRAINTS_SETTING,
      {
        variables: { accountId: accountId },
      },
    )
    return {data: data?.setting_constraints_pathway[0], loading}
}
  
const PATHWAY_CONSTRAINTS_SETTING = gql`
    query PathwayConstraintsSetting($accountId: uuid!) {
        setting_constraints_pathway(where: {accountId: {_eq: $accountId}}) {
            id
            ...pathwayConstraintsSettingFragment
        }
    }
    ${pathwayConstraintsSettingFragment}
`

export function useUpdatePathwayConstraintsSetting(accountId, input) {
    const [updatePathwayConstraintsSetting, result] = useMutation(
            PATHWAY_CONTRAINTS_UPDATE_MUTATION,
        )
    return [(accountId, input) => updatePathwayConstraintsSetting({ variables: { accountId, input } }), result]
}

const PATHWAY_CONTRAINTS_UPDATE_MUTATION = gql`
    mutation updatePathwayConstraintsSetting($accountId: uuid!, $input: setting_constraints_pathway_set_input) {
        update_setting_constraints_pathway(where: {accountId: {_eq: $accountId}}, _set: $input) {
            affected_rows
            returning {
                ...pathwayConstraintsSettingFragment
            }
        }
    }
    ${pathwayConstraintsSettingFragment}
`

export const useCreatePathwayConstraintsSetting = () => {
	const [createPathwayConstraintsSettings] = useMutation(
        PATHWAY_CONSTRAINTS_SETTING_CREATE_MUTATION
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

const PATHWAY_CONSTRAINTS_SETTING_CREATE_MUTATION = gql`
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

export const useEditConstraints = () => {
	const [editConstraints, result] = useMutation(
        PATHWAY_CONSTRAINTS_EDIT_MUTATION
    )

	return [(constraints, pathwayId) =>
		editConstraints({
			variables: {
				pathwayId: pathwayId,
				constraints: constraints,
			}
    }), result]
}

const PATHWAY_CONSTRAINTS_EDIT_MUTATION = gql`
    mutation editConstraints(
		$pathwayId: uuid!, 
		$constraints: jsonb!,
	) {
        insert_pathway_constraints_one(
            object: {
                pathwayId: $pathwayId,
                constraints: $constraints
            },
			on_conflict: {
				where: {
					pathwayId: {
						_eq: $pathwayId
					}
				}, 
				update_columns: constraints, 
				constraint: pathway_constraints_pathwayId_key
			}
        ) {
            id,
			constraints
        }
    }
`

export function useGetPathwayConstraints(pathwayId) {
    const {data, loading} = useQuery(
        PATHWAY_CONSTRAINTS,
      {
        variables: { pathwayId: pathwayId },
      },
    )

    return {data: data?.pathway_constraints[0], loading}
}
  
const PATHWAY_CONSTRAINTS = gql`
    query getPathwayConstraints($pathwayId: uuid!) {
        pathway_constraints(where: {pathwayId: {_eq: $pathwayId}}) {
            id
            ...pathwayConstraintsFragment
        }
    }
    ${pathwayConstraintsFragment}
`