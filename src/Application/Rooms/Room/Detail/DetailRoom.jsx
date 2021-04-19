import { Tabs } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import { useGetRoomById } from '../../rooms.hooks'
import { RoomConstraints } from './Constraints/RoomConstraints'
import Informations from './Informations/informations'
import Calendars from '../../../Calendars/Calendars'

const DetailRoom = () => {
	const { id } = useParams()

	const { TabPane } = Tabs

	const { loading, room } = useGetRoomById(id)

	if (loading) return null

	return (
		<div className="details">
			<Tabs defaultActiveKey="1">
				<TabPane tab={`${room.name}`} key="1">
					<Informations room={room} loading={loading} />
				</TabPane>
				<TabPane tab="Contraintes" key="2">
					<div className="contraints-informations">
					<RoomConstraints />
					</div>
				</TabPane>
				<TabPane tab="Calendriers" key="3">
					<div>
						<Calendars />
					</div>
				</TabPane>
			</Tabs>
		</div>
	)
}

export default DetailRoom
