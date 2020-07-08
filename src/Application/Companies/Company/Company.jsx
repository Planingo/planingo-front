import React from 'react'
import './company.scss'
import { Card } from 'antd'

const Company = ({ data }) => {
	const { Meta } = Card
	return (
		<div className="company">
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
		</div>
	)
}

export default Company