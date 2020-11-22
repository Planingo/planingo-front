import { Tabs } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import Calendars from '../../../Calendars/Calendars'
import { useGetProfessorById } from '../../professors.hooks'
import Informations from './Informations/informations'

const DetailProfessor = () => {
	const { id } = useParams()

	const { TabPane } = Tabs

	const { loading, professor } = useGetProfessorById(id)

	if (loading) return null

	return (
		<div className="details">
			<Tabs defaultActiveKey="1">
				<TabPane tab={`${professor.firstName} ${professor.lastName}`} key="1">
					<Informations professor={professor} loading={loading} />
				</TabPane>
				<TabPane tab="Contraintes" key="2">
					<div className="contraints-informations">
						<p>Contraintes</p>
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

export default DetailProfessor
