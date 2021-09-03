import React from 'react'
import './rooms.scss'
import Room from './Room/Room'
import AddRoom from './Room/Add/AddRoom'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import { Spin } from '@planingo/ditto'

const Rooms = ({ rooms, loading }) => {
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
			<Gallery
				datas={rooms}
				loading={loading}
				Item={Room}
				Add={AddRoom}
				title={intl.formatMessage({ id: 'add.room' })}
			/>
		</div>
	)
}

export default Rooms
