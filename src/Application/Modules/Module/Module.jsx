import React from 'react'
import './module.scss'
import { Card } from '../../Layout/Card'

const Module = ({ data }) => {
	return (
		<div className="module">
			<Card
				key={data.id}
				tags={[]}
				downloadTitle={`Télécharger le calendrier de ${data.name}`}
				cloudTitle={`Envoyer le calendrier à toutes les personnes programmées pour ${data.name}`}
				deleteTitle={`Supprimer le module ${data.name}`}
				link={`/modules/${data.id}`}
				title={data.name}
				alt={data.name}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Module
