import React from 'react'
import './room.scss'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const Room = ({ data }) => {
	const { Meta } = Card
	return (
		<div className="room">
			<Link to={`/rooms/${data.id}`}>
				<Card
					hoverable
					cover={
						<img
							alt="example"
							src={`https://avatars.bugsyaya.dev/285/${data.id}`}
						/>
					}
				>
					<Meta title={`${data.name}`} />
				</Card>
			</Link>
		</div>
	)
}

export default Room
