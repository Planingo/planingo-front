import React from 'react'
import './student.scss'
import { Card } from '../../Layout/Card'

const Student = ({ data }) => {
	return (
			<div className="student">
			<Card
				link={`/students/${data.id}`}
				title={`${data.firstName} ${data.lastName}`}
				alt={`${data.firstName} ${data.lastName}`}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Student
