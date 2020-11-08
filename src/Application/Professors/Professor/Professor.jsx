import React from 'react'
import './professor.scss'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const Professor = ({ data }) => {
	const { Meta } = Card
	return (
		<div className="professor">
			<Link to={`/professors/${data.id}`}>
				<Card
					hoverable
					cover={
						<img
							alt="example"
							src={`https://avatars.bugsyaya.dev/285/${data.id}`}
						/>
					}
				>
					<Meta
						title={`${data.firstName} ${data.lastName}`}
						description={data.modules[0].module.name}
					/>
				</Card>
			</Link>
		</div>
	)
}

export default Professor
