import React from 'react'
import './module.scss'
import { Card } from 'antd'

const Module = ({ data }) => {
	const { Meta } = Card
	return (
		<div className="module">
			<Card hoverable>
				<Meta title={data.name} description={data.description} />
			</Card>
		</div>
	)
}

export default Module
