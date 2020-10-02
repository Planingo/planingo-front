import React from 'react'
import './module.scss'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const Module = ({ data }) => {
	const { Meta } = Card
	return (
		<div className="module">
			<Link to={`/modules/${data.id}`}>
				<Card hoverable>
					<Meta title={data.name} description={data.description} />
				</Card>
			</Link>
		</div>
	)
}

export default Module
