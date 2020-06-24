import React from 'react'
import './professor.scss'
import { Card } from 'antd'

const Professor = ({ firstName, lastName, modules }) => {
	const { Meta } = Card
	return (
		<div className="professor">
			<Card
				hoverable
				style={{ width: 240 }}
				cover={
					<img
						alt="example"
						src={`https://source.unsplash.com/600x400/?personne&${firstName}${lastName}`}
					/>
				}
			>
				<Meta
					title={`${firstName} ${lastName}`}
					description={modules[0].module.name}
				/>
			</Card>
		</div>
	)
}

export default Professor
