import React from 'react'
import './professor.scss'
import { Card } from '../../Layout/Card'
import { TagsOutlined } from '@ant-design/icons'

const Professor = ({ data }) => {
	console.log(data.modules.map(m => m.module.name))
	return (
		<div className="professor">
			<Card
				icon={<TagsOutlined/>}
				tags={data.modules.map(m => m.module.name)}
				downloadTitle={`Télécharger le calendrier de ${data.firstName} ${data.lastName}`}
				cloudTitle={`Envoyer le calendrier`}
				type='lesson'
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
