import React from 'react'
import './student.scss'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import { head } from 'lodash'

const Student = ({ data }) => {
	const { Meta } = Card
	return (
		<div className="student">
			<Link to={`/students/${data.id}`}>
				<Card
					hoverable
					cover={
						<img
							alt="example"
							src={`https://avatars.bugsyaya.dev/285/${data.id}_${data.pathway.id}`}
						/>
					}
				>
					<Meta
						title={`${data.firstName} ${data.lastName}`}
						description={`${data.pathway.name}${
							data.apprenticeships.length
								? ' - ' + head(data.apprenticeships).company.name
								: ''
						}`}
					/>
				</Card>
			</Link>
		</div>
	)
}

export default Student
