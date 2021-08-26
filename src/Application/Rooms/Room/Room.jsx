import React from 'react'
import './room.scss'
import { Card } from '../../Layout/Card'

const Room = ({ data }) => {
	return (
		<div className="room">
			<Card
				link={`/rooms/${data.id}`}
				title={data.name}
				alt={data.name}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Room
