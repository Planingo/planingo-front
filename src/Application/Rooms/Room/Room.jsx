import React from 'react'
import './room.scss'
import { Card } from 'antd'

const Room = ({ data }) => {
	const { Meta } = Card
	return (
		<div className="room">
			<Card
				hoverable
				cover={
					<img
						alt="example"
						src={`https://source.unsplash.com/600x400/?personne&${data.firstName}${data.lastName}`}
					/>
				}
			>
				<Meta
					title={`${data.firstName} ${data.lastName}`}
					description={data.pathway.name}
				/>
			</Card>
		</div>
	)
}

export default Room
