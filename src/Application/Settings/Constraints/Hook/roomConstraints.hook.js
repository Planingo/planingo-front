import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const roomConstraintsSettingFragment = gql`
    fragment roomConstraintsSettingFragment on setting_constraints_room {
        id,
        accountId,
        capacity,
    }
`

export const roomConstraintsFragment = gql`
    fragment roomConstraintsFragment on room_constraints {
		roomId
		constraints
    }
`

export function useRoomConstraintsSetting(accountId) {
    const {data, loading} = useQuery(
        ROOM_CONSTRAINTS_SETTING,
      {
        variables: { accountId: accountId },
      },
    )
    return {data: data?.setting_constraints_room[0], loading}
}
  
const ROOM_CONSTRAINTS_SETTING = gql`
    query roomConstraintsSetting($accountId: uuid!) {
        setting_constraints_room(where: {accountId: {_eq: $accountId}}) {
            id
            ...roomConstraintsSettingFragment
        }
    }
    ${roomConstraintsSettingFragment}
`

export function useUpdateRoomConstraintsSetting(accountId, input) {
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
                ...roomConstraintsSettingFragment
            }
        }
    }
    ${roomConstraintsSettingFragment}
`

export const useCreateRoomConstraintsSetting = () => {
	const [createRoomConstraintsSettings] = useMutation(
        ROOM_CONSTRAINTS_SETTING_CREATE_MUTATION
    )
	return accountId =>
    createRoomConstraintsSettings({
        variables: {
            capacity: true,
            accountId: accountId,
        },
    })
}

const ROOM_CONSTRAINTS_SETTING_CREATE_MUTATION = gql`
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

export const useEditConstraints = () => {
	const [editConstraints, result] = useMutation(
        ROOM_CONSTRAINTS_EDIT_MUTATION
    )

	return [(constraints, roomId) =>
		editConstraints({
			variables: {
				roomId: roomId,
				constraints: constraints,
			}
    }), result]
}

const ROOM_CONSTRAINTS_EDIT_MUTATION = gql`
    mutation editConstraints(
		$roomId: uuid!, 
		$constraints: jsonb!,
	) {
        insert_room_constraints_one(
            object: {
                roomId: $roomId,
                constraints: $constraints
            },
			on_conflict: {
				where: {
					roomId: {
						_eq: $roomId
					}
				}, 
				update_columns: constraints, 
				constraint: room_constraints_roomId_key
			}
        ) {
            id,
			constraints
        }
    }
`


export function useGetRoomConstraints(roomId) {
    const {data, loading} = useQuery(
        ROOM_CONSTRAINTS,
      {
        variables: { roomId: roomId },
      },
    )

    return {data: data?.room_constraints[0], loading}
}
  
const ROOM_CONSTRAINTS = gql`
    query getRoomConstraints($roomId: uuid!) {
        room_constraints(where: {roomId: {_eq: $roomId}}) {
            id
            ...roomConstraintsFragment
        }
    }
    ${roomConstraintsFragment}
`