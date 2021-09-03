import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const SEARCH_ROOMS = gql`
  query getAllRooms($searchText: String) {
    room(order_by: {name: asc}, where: { name: { _ilike: $searchText }}) {
		description
		id
		name
	}
  }
`

export const useSearchRooms = () => {
	const [u, setU] = useState()

    const {data,...result } = useQuery(SEARCH_ROOMS, {variables: { ...u }})
  
    const search = useDebouncedCallback((searchText) => {
		if (searchText) setU({ searchText: `%${searchText}%` })
		else setU(null)
    }, 500)

    const rooms = data?.room
    return { search, rooms, ...result }
}

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

export const useEdit = () => {
	const [edit, result] = useMutation(
		gql`
			mutation edit($id: uuid!, $room: room_set_input) {
				update_room_by_pk(pk_columns: { id: $id }, _set: $room) {
					description
					id
					max_seats
					name
				}
			}
		`,
	)

	return [(room, id) => edit({ variables: { id, room } }), result]
}

export const useDeleteRoomById = () => {
	const [deleteRoomById, { loading, data }] = useMutation(
		gql`
			mutation deleteRoomById($id: uuid!) {
				delete_room_by_pk(id: $id) {
					id
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

	return [
		(id) => deleteRoomById({ variables: { id } }),
		{ loading, company: data?.delete_room_by_pk },
	]
}
