import React from 'react'
import './lesson.scss'
import { Card } from '../../Layout/Card'

const Lesson = ({ data }) => {
	return (
		<div className="lesson-container">
			<Card
				link={`/lessons/${data.id}`}
				title={data.name}
				alt={data.name}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Lesson
