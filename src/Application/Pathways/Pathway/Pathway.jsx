import React from 'react'
import './pathway.scss'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const Pathway = ({ data }) => {
	const { Meta } = Card
	return (
		<div className="pathway">
			<Link to={`/pathways/${data.id}`}>
				<Card
					hoverable
					cover={
						<img
							alt="example"
							src={`https://source.unsplash.com/600x400/?personne&${data.name}${data.description}`}
						/>
					}
				>
					<Meta title={data.name} description={data.description} />
				</Card>
			</Link>
		</div>
	)
}

export default Pathway
