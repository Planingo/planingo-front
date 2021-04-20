import { Tabs } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import Calendars from '../../../Calendars/Calendars'
import { useGetPathwayById } from '../../pathways.hooks'
import { PathwayConstraintsRead } from './Constraints'
import './detailPathway.scss'
import Informations from './Informations/informations'
import { Modules } from './Modules'

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
						<PathwayConstraintsRead />
					</div>
				</TabPane>
				<TabPane tab="Modules" key="3">
					<div className="contraints-informations">
						<Modules />
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
