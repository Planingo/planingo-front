import React from 'react'
import './professor.scss'
import { Card } from 'antd'

const Professor = ({ data }) => {
	const { Meta } = Card
	return (
		<div className="professor">
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
					description={data.modules[0].module.name}
				/>
			</Card>
		</div>
	)
}

export default Professor
