import React from 'react'
import { Link } from 'react-router-dom'
import './informations.scss'

const Informations = ({ loading, student }) => {
	if (loading) return null

	return (
		<div className="student-informations">
			<img
				alt="example"
				src={`https://avatars.bugsyaya.dev/285/${student.id}_${student.pathwayId}`}
			/>
			<div>
				<p className="student-name">
					{student.firstName} {student.lastName}
				</p>
				<div className="align">
					<p>Formation :</p>
					<Link to={`/pathways/${student.pathwayId}`}>
						{student.pathway.name}
					</Link>
				</div>

				<div className="align">
					<p>Apprentissage :</p>
					<p>
						{student.apprenticeships.length
							? student.apprenticeships.map(
									(apprenticeship) => apprenticeship.company.name,
							  )
							: '-'}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Informations
