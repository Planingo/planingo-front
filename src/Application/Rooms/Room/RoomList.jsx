import React from 'react'
import './room.scss'
import { Link } from 'react-router-dom'

const RoomList = ({ data }) => {
	return (
		<div className="room">
			<Link to={`/rooms/${data.id}`}>{data.pathway.name}</Link>
		</div>
	)
}

export default RoomList
