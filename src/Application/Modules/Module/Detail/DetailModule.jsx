import { Tabs } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import { useGetModuleById } from '../../modules.hooks'
import { ModuleConstraints } from './Constraints/ModuleConstraints'
import Informations from './Informations/informations'
import Calendars from './Calendars/calendars'

const DetailModule = () => {
	const { id } = useParams()

	const { TabPane } = Tabs

	const { loading, module } = useGetModuleById(id)

	if (loading) return null

	return (
		<div className="details">
			<Tabs defaultActiveKey="1">
				<TabPane tab={`${module.name}`} key="1">
					<Informations module={module} loading={loading} />
				</TabPane>
				<TabPane tab="Contraintes" key="2">
					<div className="contraints-informations">
					<ModuleConstraints />
					</div>
				</TabPane>
				<TabPane tab="Calendriers" key="3">
					<div>
						<Calendars />
					</div>
				</TabPane>
			</Tabs>
		</div>
	)
}

export default DetailModule
