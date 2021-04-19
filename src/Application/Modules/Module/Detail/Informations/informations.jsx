import React from 'react'
import './informations.scss'

const Informations = ({ loading, module }) => {
	if (loading) return null

	return (
		<div className="student-informations">
			<img
				alt="example"
				src={`https://avatars.bugsyaya.dev/285/${module.id}`}
			/>
			<div>
				<p className="student-name">
					{module.name}
				</p>
			</div>
		</div>
	)
}

export default Informations
