import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const lessonConstraintsSettingFragment = gql`
    fragment lessonConstraintsSettingFragment on setting_constraints_lesson {
        id,
        accountId,
        breakable,
    }
`

export const lessonConstraintsFragment = gql`
    fragment lessonConstraintsFragment on lesson_constraints {
		lessonId
		constraints
    }
`

export function useLessonConstraintsSetting(accountId) {
    const {data, loading} = useQuery(
        LESSON_CONSTRAINTS_SETTING,
        {
            variables: { accountId: accountId },
        },
    )
    return {data: data?.setting_constraints_lesson[0], loading}
}
  
const LESSON_CONSTRAINTS_SETTING = gql`
    query lessonConstraints($accountId: uuid!) {
        setting_constraints_lesson(where: {accountId: {_eq: $accountId}}) {
            id
            ...lessonConstraintsSettingFragment
        }
    }
    ${lessonConstraintsSettingFragment}
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
                ...lessonConstraintsSettingFragment
            }
        }
    }
    ${lessonConstraintsSettingFragment}
`

export const useCreateLessonConstraintsSetting = () => {
	const [createLessonConstraintsSettings] = useMutation(
        LESSON_CONSTRAINTS_SETTING_CREATE_MUTATION
    )
	return accountId =>
    createLessonConstraintsSettings({
        variables: {
            breakable: true,
            accountId: accountId,
        },
    })
}

const LESSON_CONSTRAINTS_SETTING_CREATE_MUTATION = gql`
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
export const useEditLessonConstraints = () => {
	const [editLessonConstraints, result] = useMutation(
        LESSON_CONSTRAINTS_EDIT_MUTATION
    )

	return [(constraints, lessonId) =>
		editLessonConstraints({
			variables: {
				lessonId: lessonId,
				constraints: constraints,
			}
    }), result]
}

const LESSON_CONSTRAINTS_EDIT_MUTATION = gql`
    mutation editLessonConstraints(
		$lessonId: uuid!, 
		$constraints: jsonb!,
	) {
        insert_lesson_constraints_one(
            object: {
                lessonId: $lessonId,
                constraints: $constraints
            },
			on_conflict: {
				where: {
					lessonId: {
						_eq: $lessonId
					}
				}, 
				update_columns: constraints, 
				constraint: lesson_constraints_lessonId_key
			}
        ) {
            id,
			constraints
        }
    }
`

export function useGetLessonConstraints(lessonId) {
    console.log(lessonId)
    const {data, loading} = useQuery(
        LESSON_CONSTRAINTS,
      {
        variables: { lessonId: lessonId },
      },
    )

    console.log(data)

    return {data: data?.lesson_constraints[0], loading}
}
  
const LESSON_CONSTRAINTS = gql`
    query getLessonConstraints($lessonId: uuid!) {
        lesson_constraints(where: {lessonId: {_eq: $lessonId}}) {
            id
            ...lessonConstraintsFragment
        }
    }
    ${lessonConstraintsFragment}
`
