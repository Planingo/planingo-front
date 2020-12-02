import { Tabs } from 'antd'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useParams } from 'react-router'
import Calendars from '../../../Calendars/Calendars'
import { useGetPathwayById } from '../../pathways.hooks'
import Constraints from './Constraints/constraints'
import './detailPathway.scss'
import Informations from './Informations/informations'

const DetailPathway = () => {
	const { id } = useParams()

	const { TabPane } = Tabs

	const { loading, pathway } = useGetPathwayById(id)

	if (loading) return null

	return (
		<div className="details">
			<Tabs defaultActiveKey="1">
				<TabPane tab={`${pathway.name}`} key="1">
					<Informations pathway={pathway} loading={loading} />
				</TabPane>
				<TabPane tab="Contraintes" key="2">
					<div className="contraints-informations">
						<DndProvider backend={HTML5Backend}>
							<Constraints modules={pathway.modules} />
						</DndProvider>
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

export default DetailPathway
