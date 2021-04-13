import React from 'react'
import './constraints.scss'
import { Collapse } from 'antd'
import { ProfessorConstraints } from './Componants'

export const Constraints = () => {
	const { Panel } = Collapse;

	function callback(key) {
		console.log(key);
	}

	return (
		<Collapse defaultActiveKey={['1']} onChange={callback}>
			<Panel header="Contraintes de l'intervenant" key="1">
				<ProfessorConstraints />
			</Panel>
		</Collapse>
	)
}

