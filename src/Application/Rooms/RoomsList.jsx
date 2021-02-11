import React from 'react'
import './rooms.scss'
import RoomList from './Room/Room'
import AddRoom from './Room/Add/AddRoom'
import { useGetAllRooms } from './rooms.hooks'
import List from '../Layout/List'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import { Spin } from '@planingo/ditto'

const RoomsList = ({ roomSearch }) => {
	const intl = useIntl()
	const { data, loading } = useGetAllRooms()

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (!data)
		return (
			<NoData
				Add={AddRoom}
				cta={intl.formatMessage({ id: 'add.room' })}
				description={intl.formatMessage({ id: 'no.data.room' })}
				title={intl.formatMessage({ id: 'add.room' })}
			/>
		)

	const rooms = roomSearch
		? data.room.filter((c) =>
				c.name.toLowerCase().includes(roomSearch.toLowerCase()),
		  )
		: data.room

	return (
		<div className="rooms">
			<List
				datas={rooms}
				loading={loading}
				Item={RoomList}
				Add={AddRoom}
				title={intl.formatMessage({ id: 'add.room' })}
			/>
		</div>
	)
}

export default RoomsList
