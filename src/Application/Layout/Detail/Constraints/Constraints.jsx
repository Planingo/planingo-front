import React from 'react'
import './constraints.scss'
import { Button } from '@planingo/ditto'
import NoData from '../../../../Extra/NoData'

export const Constraints = ({haveConstraints, toShow}) => {
	return (
		<>
			{haveConstraints && toShow}
			{!haveConstraints && 
			<div className="noData-container">
				<NoData description='Aucun contrainte est renseignée' />
				<Button className="cta" size="large">Créer une contrainte</Button>
			</div>
			}
		</>
	)
}
