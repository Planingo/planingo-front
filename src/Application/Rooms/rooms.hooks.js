import { useMutation, useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const getRoomsQuerie = gql`
	query getAllRooms {
		room(order_by: { name: asc }) {
			description
			id
			max_seats
			name
		}
	}
`

export const useGetAllRooms = () => {
	const result = useQuery(getRoomsQuerie)
	return result
}

export const useGetRoomById = (id) => {
	const { loading, data } = useQuery(
		gql`
			query getRoomsById($id: uuid!) {
				room_by_pk(id: $id) {
					description
					id
					max_seats
					name
				}
			}
		`,
		{ variables: { id: id } },
	)
	return { loading, room: data?.room_by_pk }
}

export const useAddRoom = () => {
	const [addRoom, result] = useMutation(
		gql`
			mutation addRoom($room: room_insert_input!) {
				insert_room_one(object: $room) {
					description
					id
					max_seats
					name
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getRoomsQuerie,
				},
			],
		},
	)

	return [(room) => addRoom({ variables: { room } }), result]
}

export const useEditRoom = () => {
	const [editRoom, result] = useMutation(
		gql`
			mutation editRoom($id: uuid!, $room: room_set_input) {
				update_room_by_pk(pk_columns: { id: $id }, _set: $room) {
					description
					id
					max_seats
					name
				}
			}
		`,
	)

	return [(room, id) => editRoom({ variables: { id, room } }), result]
}

export const useDeleteRoomById = (id) => {
	const [deleteRoomById, { loading, data }] = useMutation(
		gql`
			mutation deleteRoomById($id: uuid!) {
				delete_room_by_pk(id: $id) {
					id
				}
			}
		`,
		{
			variables: { id: id },
			refetchQueries: [
				{
					query: getRoomsQuerie,
				},
			],
		},
	)

	return [deleteRoomById, { loading, company: data?.delete_room_by_pk }]
}
