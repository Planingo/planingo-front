import React from 'react'
import './module.scss'
import { Card } from '../../Layout/Card'

const Module = ({ data }) => {
	return (
		<div className="module">
			<Card
				link={`/modules/${data.id}`}
				title={data.name}
				alt={data.name}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Module
