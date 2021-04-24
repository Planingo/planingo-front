import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const professorConstraintsSettingFragment = gql`
    fragment professorConstraintsSettingFragment on setting_constraints_professor {
        id,
        accountId,
        intervention,
		schoolPlace,
    }
`

export const professorConstraintsFragment = gql`
    fragment professorConstraintsFragment on professor_constraints {
		professorId
		constraints
    }
`

export function useProfessorConstraintsSetting(accountId) {
    const {data, loading} = useQuery(
        PROFESSOR_CONSTRAINTS_SETTING,
      {
        variables: { accountId: accountId },
      },
    )
    return {data: data?.setting_constraints_professor[0], loading}
}
  
const PROFESSOR_CONSTRAINTS_SETTING = gql`
    query professorConstraints($accountId: uuid!) {
        setting_constraints_professor(where: {accountId: {_eq: $accountId}}) {
            id
            ...professorConstraintsSettingFragment
        }
    }
    ${professorConstraintsSettingFragment}
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
                ...professorConstraintsSettingFragment
            }
        }
    }
    ${professorConstraintsSettingFragment}
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

export const useEditConstraints = () => {
	const [editConstraints, result] = useMutation(
        PROFESSOR_CONSTRAINTS_EDIT_MUTATION
    )

	return [(constraints, professorId) =>
		editConstraints({
			variables: {
				professorId: professorId,
				constraints: constraints,
			}
    }), result]
}

const PROFESSOR_CONSTRAINTS_EDIT_MUTATION = gql`
    mutation editConstraints(
		$professorId: uuid!, 
		$constraints: jsonb!,
	) {
        insert_professor_constraints_one(
            object: {
                professorId: $professorId,
                constraints: $constraints
            },
			on_conflict: {
				where: {
					professorId: {
						_eq: $professorId
					}
				}, 
				update_columns: constraints, 
				constraint: professor_constraints_professorId_key
			}
        ) {
            id,
			constraints
        }
    }
`


export function useGetProfessorConstraints(professorId) {
    const {data, loading} = useQuery(
        PROFESSOR_CONSTRAINTS,
      {
        variables: { professorId: professorId },
      },
    )

    return {data: data?.professor_constraints[0], loading}
}
  
const PROFESSOR_CONSTRAINTS = gql`
    query getProfessorConstraints($professorId: uuid!) {
        professor_constraints(where: {professorId: {_eq: $professorId}}) {
            id
            ...professorConstraintsFragment
        }
    }
    ${professorConstraintsFragment}
`