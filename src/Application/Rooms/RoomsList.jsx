import React from 'react'
import './rooms.scss'
import RoomList from './Room/Room'
import AddRoom from './Room/Add/AddRoom'
import List from '../Layout/List'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import { Spin } from '@planingo/ditto'

const RoomsList = ({ rooms, loading }) => {
	const intl = useIntl()

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (rooms.length === 0)
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
