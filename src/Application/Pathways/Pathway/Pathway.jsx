import React from 'react'
import './pathway.scss'
import { Card } from '../../Layout/Card'

const Pathway = ({ data }) => {
	return (
		<div className="pathway-container">
			<Card
				tags={[]}
				downloadTitle={`Télécharger le calendrier de ${data.name}`}
				cloudTitle={`Envoyer le calendrier à toutes les personnes de ${data.name}`}
				deleteTitle={`Supprimer la formation ${data.name}`}
				link={`/pathways/${data.id}`}
				title={data.name}
				alt={data.name}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Pathway
