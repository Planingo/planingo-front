import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const lessonConstraintsFragment = gql`
    fragment lessonConstraintsFragment on setting_constraints_lesson {
        id,
        accountId,
        breakable,
    }
`

export function useLessonConstraints(accountId) {
    const {data, loading} = useQuery(
        LESSON_CONSTRAINTS,
        {
            variables: { accountId: accountId },
        },
    )
    return {data: data?.setting_constraints_lesson[0], loading}
}
  
const LESSON_CONSTRAINTS = gql`
    query lessonConstraints($accountId: uuid!) {
        setting_constraints_lesson(where: {accountId: {_eq: $accountId}}) {
            id
            ...lessonConstraintsFragment
        }
    }
    ${lessonConstraintsFragment}
`

export function useUpdateLessonConstraints(accountId, input) {
    const [updateLessonConstraints, result] = useMutation(
            LESSON_CONTRAINTS_UPDATE_MUTATION,
        )
    return [(accountId, input) => updateLessonConstraints({ variables: { accountId, input } }), result]
}

const LESSON_CONTRAINTS_UPDATE_MUTATION = gql`
    mutation updateLessonConstraints($accountId: uuid!, $input: setting_constraints_lesson_set_input) {
        update_setting_constraints_lesson(where: {accountId: {_eq: $accountId}}, _set: $input) {
            affected_rows
            returning {
                ...lessonConstraintsFragment
            }
        }
    }
    ${lessonConstraintsFragment}
`

export const useCreateLessonConstraintsSetting = () => {
	const [createLessonConstraintsSettings] = useMutation(
        LESSON_CONSTRAINTS_CREATE_MUTATION
    )
	return accountId =>
    createLessonConstraintsSettings({
        variables: {
            breakable: true,
            accountId: accountId,
        },
    })
}

const LESSON_CONSTRAINTS_CREATE_MUTATION = gql`
    mutation createLessonConstraintsSettings($breakable: Boolean!, $accountId: uuid!) {
        insert_setting_constraints_lesson_one(
            object: {
                breakable: $breakable
                accountId: $accountId
            }
        ) {
            id
        }
    }
`
