import React from 'react'
import './company.scss'
import { Card } from '../../Layout/Card'
import { TagsOutlined } from '@ant-design/icons'

const Company = ({ data }) => {
	return (
		<div className="company">
			<Card
				tags={[]}
				downloadTitle={`Télécharger le calendrier de ${data.name}`}
				cloudTitle={`Envoyer le calendrier à toutes les personnes de ${data.name}`}
				deleteTitle={`Supprimer l'entreprise ${data.name}`}
				link={`/companies/${data.id}`}
				title={data.name}
				alt={data.name}
				src={`https://avatars.bugsyaya.dev/285/${data.id}`}
			/>
		</div>
	)
}

export default Company
