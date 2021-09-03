import React from 'react'
import './student.scss'
import { Card } from '../../Layout/Card'

const Student = ({ data }) => {
	return (
			<div className="student">
			<Card
				downloadTitle={`Télécharger le calendrier de ${data.firstName} ${data.lastName}`}
				cloudTitle={`Envoyer le calendrier`}
				deleteTitle={`Supprimer l'étudiant ${data.firstName} ${data.lastName}`}
				link={`/students/${data.id}`}
				title={<div className="studentInfo">{data.firstName} <div className="lastName">{data.lastName}</div></div>}
				alt={`${data.firstName} ${data.lastName}`}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Student
