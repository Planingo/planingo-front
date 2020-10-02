import React from 'react'
import './rooms.scss'
import Room from './Room/Room'
import AddRoom from './Room/Add/AddRoom'
import { useGetAllRooms } from './rooms.hooks'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'

const Rooms = () => {
	const intl = useIntl()
	const { data, loading } = useGetAllRooms()

	if (loading) return <div>Loading....</div>

	if (!data)
		return (
			<NoData
				Add={AddRoom}
				cta={intl.formatMessage({ id: 'add.room' })}
				description={intl.formatMessage({ id: 'no.data.room' })}
				title={intl.formatMessage({ id: 'add.room' })}
			/>
		)
	return (
		<div className="rooms">
			<Gallery
				datas={data?.room}
				loading={loading}
				Item={Room}
				Add={AddRoom}
				title={intl.formatMessage({ id: 'add.room' })}
			/>
		</div>
	)
}

export default Rooms
