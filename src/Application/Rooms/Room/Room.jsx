import React from 'react'
import './room.scss'
import { Card } from '../../Layout/Card'

const Room = ({ data }) => {
	return (
		<div className="room">
			<Card
				key={data.id}
				tags={[]}
				downloadTitle={`Télécharger le calendrier de ${data.name}`}
				cloudTitle={`Envoyer le calendrier à toutes les personnes utilisant ${data.name}`}
				deleteTitle={`Supprimer la salle ${data.name}`}
				link={`/rooms/${data.id}`}
				title={data.name}
				alt={data.name}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Room
