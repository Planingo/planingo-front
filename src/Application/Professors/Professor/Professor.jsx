import React from 'react'
import './professor.scss'
import { Card } from '../../Layout/Card'

const Professor = ({ data }) => {
	return (
		<div className="professor">
			<Card
				link={`/professors/${data.id}`}
				title={`${data.firstName} ${data.lastName}`}
				alt={`${data.firstName} ${data.lastName}`}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Professor
