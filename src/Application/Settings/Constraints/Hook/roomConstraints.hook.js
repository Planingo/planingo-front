import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const roomConstraintsFragment = gql`
    fragment roomConstraintsFragment on setting_constraints_room {
        id,
        accountId,
        capacity,
    }
`

export function useRoomConstraints(accountId) {
    const {data, loading} = useQuery(
        ROOM_CONSTRAINTS,
      {
        variables: { accountId: accountId },
      },
    )
    return {data: data?.setting_constraints_room[0], loading}
}
  
const ROOM_CONSTRAINTS = gql`
    query roomConstraints($accountId: uuid!) {
        setting_constraints_room(where: {accountId: {_eq: $accountId}}) {
            id
            ...roomConstraintsFragment
        }
    }
    ${roomConstraintsFragment}
`

export function useUpdateRoomConstraints(accountId, input) {
    const [updateRoomConstraints, result] = useMutation(
            ROOM_CONTRAINTS_UPDATE_MUTATION,
        )
    return [(accountId, input) => updateRoomConstraints({ variables: { accountId, input } }), result]
}

const ROOM_CONTRAINTS_UPDATE_MUTATION = gql`
    mutation updateRoomConstraints($accountId: uuid!, $input: setting_constraints_room_set_input) {
        update_setting_constraints_room(where: {accountId: {_eq: $accountId}}, _set: $input) {
            affected_rows
            returning {
                ...roomConstraintsFragment
            }
        }
    }
    ${roomConstraintsFragment}
`

export const useCreateRoomConstraintsSetting = () => {
	const [createRoomConstraintsSettings] = useMutation(
        ROOM_CONSTRAINTS_CREATE_MUTATION
    )
	return accountId =>
    createRoomConstraintsSettings({
        variables: {
            capacity: true,
            accountId: accountId,
        },
    })
}

const ROOM_CONSTRAINTS_CREATE_MUTATION = gql`
    mutation createRoomConstraintsSettings($capacity: Boolean!, $accountId: uuid!) {
        insert_setting_constraints_room_one(
            object: {
                capacity: $capacity
                accountId: $accountId
            }
        ) {
            id
        }
    }
`
