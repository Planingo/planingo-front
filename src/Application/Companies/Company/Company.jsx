import React from 'react'
import './company.scss'
import { Card } from '../../Layout/Card'

const Company = ({ data }) => {
	return (
		<div className="company">
			<Card
				link={`/companies/${data.id}`}
				title={data.name}
				alt={data.name}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Company
