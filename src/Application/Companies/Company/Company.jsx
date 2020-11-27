import React from 'react'
import './company.scss'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const Company = ({ data }) => {
	const { Meta } = Card
	return (
		<div className="company">
			<Link to={`/companies/${data.id}`}>
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

export default Company
