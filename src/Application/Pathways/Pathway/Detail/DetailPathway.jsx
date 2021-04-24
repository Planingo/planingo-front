import { Tabs } from 'antd'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import Calendars from '../../../Calendars/Calendars'
import { useGetModulesByOrder, useGetModulesByPathwayId, useGetPathwayById } from '../../pathways.hooks'
import { PathwayConstraintsRead } from './Constraints'
import './detailPathway.scss'
import Informations from './Informations/informations'
import { Modules } from './Modules'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useGetPathwayConstraints } from '../../../Settings/Constraints/Hook/pathwayConstraints.hook'
import { useGetAllModules, useGetModuleById } from '../../../Modules/modules.hooks'

const DetailPathway = () => {
	const { id } = useParams()

	const { TabPane } = Tabs

	const { loading, pathway } = useGetPathwayById(id)
    const {data: modulesByOrder, loading: modulesByOrderLoading} = useGetModulesByOrder(id)
    const { data: pathwayConstraints, loading: loadingPathwayConstraints } = useGetPathwayConstraints(id)

	// const {data: modulesByPathway, loading: modulesByPathwayLoading} = useGetModulesByPathwayId(id)

	const {data: modules, loading: modulesLoading} = useGetAllModules()

	if (loading || loadingPathwayConstraints || modulesLoading || modulesByOrderLoading) return null

	const allModulesMandatory = modules.module.filter(module => pathwayConstraints?.constraints?.moduleMandatory.includes(module.id))
	const allModulesOptionnal = modules.module.filter(module => pathwayConstraints?.constraints?.moduleOptionnal.includes(module.id))

	const modulesMandatory = modulesByOrder.map(module => {
		const result = allModulesMandatory.filter(m => module.moduleId === m.id)

		if(!result[0]) return null

		return ({
			id: result[0].id,
			name: result[0].name,
			order: module.order
		})
	}).filter(module => module)
	
	const modulesOptionnal = modulesByOrder.map(module => {
		const result = allModulesOptionnal.filter(m => module.moduleId === m.id)

		if(!result[0]) return null

		return ({
			id: result[0].id,
			name: result[0].name,
			order: module.order
		})
	}).filter(module => module)

	return (
		<div className="details">
			<Tabs defaultActiveKey="1">
				<TabPane tab={`${pathway.name}`} key="1">
					<Informations pathway={pathway} loading={loading} />
				</TabPane>
				<TabPane tab="Contraintes" key="2">
					<div className="contraints-informations">
						<PathwayConstraintsRead />
					</div>
				</TabPane>
				<TabPane tab="Modules" key="3">
					<div className="contraints-informations">
						<DndProvider backend={HTML5Backend}>
							<Modules modulesMandatory={modulesMandatory} modulesOptionnal={modulesOptionnal}/>
						</DndProvider>
					</div>
				</TabPane>
				<TabPane tab="Calendriers" key="4">
					<div>
						<Calendars />
					</div>
				</TabPane>
			</Tabs>
		</div>
	)
}

export default DetailPathway
