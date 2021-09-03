import React from 'react'
import './professor.scss'
import { Card } from '../../Layout/Card'

const Professor = ({ data }) => {
	return (
		<div className="professor">
			<Card
				downloadTitle={`Télécharger le calendrier de ${data.firstName} ${data.lastName}`}
				cloudTitle={`Envoyer le calendrier`}
				deleteTitle={`Supprimer le professeur ${data.firstName} ${data.lastName}`}
				link={`/professors/${data.id}`}
				title={<div className="professorInfo">{data.firstName} <div className="lastName">{data.lastName}</div></div>}
				alt={`${data.firstName} ${data.lastName}`}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Professor
