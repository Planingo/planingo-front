import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const professorConstraintsFragment = gql`
    fragment professorConstraintsFragment on setting_constraints_professor {
        id,
        accountId,
        intervention,
		schoolPlace,
    }
`

export function useProfessorConstraints(accountId) {
    const {data, loading} = useQuery(
        PROFESSOR_CONSTRAINTS,
      {
        variables: { accountId: accountId },
      },
    )
    return {data: data?.setting_constraints_professor[0], loading}
}
  
const PROFESSOR_CONSTRAINTS = gql`
    query professorConstraints($accountId: uuid!) {
        setting_constraints_professor(where: {accountId: {_eq: $accountId}}) {
            id
            ...professorConstraintsFragment
        }
    }
    ${professorConstraintsFragment}
`

export function useUpdateProfessorConstraints(accountId, input) {
    const [updateProfessorConstraints, result] = useMutation(
            PROFESSOR_CONTRAINTS_UPDATE_MUTATION,
        )
    return [(accountId, input) => updateProfessorConstraints({ variables: { accountId, input } }), result]
}

const PROFESSOR_CONTRAINTS_UPDATE_MUTATION = gql`
    mutation updateProfessorConstraints($accountId: uuid!, $input: setting_constraints_professor_set_input) {
        update_setting_constraints_professor(where: {accountId: {_eq: $accountId}}, _set: $input) {
            affected_rows
            returning {
                ...professorConstraintsFragment
            }
        }
    }
    ${professorConstraintsFragment}
`

export const useCreateProfessorConstraintsSetting = () => {
	const [createProfessorConstraintsSettings] = useMutation(
        PROFESSOR_CONSTRAINTS_CREATE_MUTATION
    )
	return accountId =>
    createProfessorConstraintsSettings({
        variables: {
            intervention: true,
            accountId: accountId,
            schoolPlace: true,
        },
    })
}

const PROFESSOR_CONSTRAINTS_CREATE_MUTATION = gql`
    mutation createProfessorConstraintsSettings($intervention: Boolean!, $accountId: uuid!, $schoolPlace: Boolean!) {
        insert_setting_constraints_professor_one(
            object: {
                intervention: $intervention
                accountId: $accountId
                schoolPlace: $schoolPlace
            }
        ) {
            id
        }
    }
`
