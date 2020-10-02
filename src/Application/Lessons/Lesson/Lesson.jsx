import React from 'react'
import './lesson.scss'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const Lesson = ({ data }) => {
	const { Meta } = Card
	return (
		<div className="lesson">
			<Link to={`/lessons/${data.id}`}>
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
			</Link>
		</div>
	)
}

export default Lesson
