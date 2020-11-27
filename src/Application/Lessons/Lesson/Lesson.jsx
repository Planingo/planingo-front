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

export default Lesson
