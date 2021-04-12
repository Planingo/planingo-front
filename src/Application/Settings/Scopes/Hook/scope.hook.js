import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const settingsFragment = gql`
    fragment settingsFragment on setting {
        accountId
        company
        id
        lesson
        module
        pathway
        professor
        room
        student
    }
`

export function useSetting(accountId) {
    const {data, loading} = useQuery(
        STUDENT_CONSTRAINTS,
      {
        variables: { accountId: accountId },
      },
    )
    return {settings: data?.setting[0], loading}
}
  
const STUDENT_CONSTRAINTS = gql`
    query setting($accountId: uuid!) {
        setting(where: {accountId: {_eq: $accountId}}) {
            id
            ...settingsFragment
        }
    }
    ${settingsFragment}
`

export function useUpdateSetting(accountId, input) {
    const [updateSetting, result] = useMutation(
            SETTING_UPDATE_MUTATION
        )
    return [(accountId, input) => updateSetting({ variables: { accountId, input } }), result]
}

const SETTING_UPDATE_MUTATION = gql`
    mutation updateSetting($accountId: uuid!, $input: setting_set_input) {
        update_setting(where: {accountId: {_eq: $accountId}}, _set: $input) {
            affected_rows
            returning {
                ...settingsFragment
            }
        }
    }
    ${settingsFragment}
`
