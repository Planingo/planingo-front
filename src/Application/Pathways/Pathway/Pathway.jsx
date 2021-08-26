import React from 'react'
import './pathway.scss'
import { Card } from '../../Layout/Card'

const Pathway = ({ data }) => {
	return (
		<div className="pathway">
			<Card
				link={`/pathways/${data.id}`}
				title={data.name}
				alt={data.name}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Pathway
