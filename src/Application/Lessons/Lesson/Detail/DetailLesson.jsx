import { Tabs } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import { useGetLessonById } from '../../lessons.hooks'
import { Constraints } from './Constraints'
import Informations from './Informations/informations'
import Calendars from './Calendars/calendars'

const DetailLesson = () => {
	const { id } = useParams()

	const { TabPane } = Tabs

	const { loading, lesson } = useGetLessonById(id)

	if (loading) return null

	return (
		<div className="details">
			<Tabs defaultActiveKey="1">
				<TabPane tab={`${lesson.name}`} key="1">
					<Informations lesson={lesson} loading={loading} />
				</TabPane>
				<TabPane tab="Contraintes" key="2">
					<div className="contraints-informations">
						<Constraints />
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

export default DetailLesson
