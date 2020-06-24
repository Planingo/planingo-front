import React from 'react'
import './student.scss'
import { Card } from 'antd'

const Student = ({ firstName, lastName, pathway }) => {
	const { Meta } = Card
	return (
		<div className="student">
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
				<Meta title={`${firstName} ${lastName}`} description={pathway.name} />
			</Card>
		</div>
	)
}

export default Student
