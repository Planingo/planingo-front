import React from 'react'
import './informations.scss'

const Informations = ({ loading, pathway }) => {
	if (loading) return null

	return (
		<div className="student-informations">
			<img
				alt="example"
				src={`https://avatars.bugsyaya.dev/285/${pathway.id}`}
			/>
			<div>
				<p className="student-name">{pathway.name}</p>
			</div>
		</div>
	)
}

export default Informations
