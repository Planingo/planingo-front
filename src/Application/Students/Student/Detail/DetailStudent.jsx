import { Tabs } from 'antd'
import { last } from 'lodash'
import React from 'react'
import { useLocation } from 'react-router'
import { useGetStudentById } from '../../students.hooks'
import './detailStudent.scss'
import Informations from './Informations/informations'

const DetailStudent = () => {
	const location = useLocation()

	const { TabPane } = Tabs

	const studentId = last(
		location.pathname.split('/').filter((path) => path !== ''),
	)

	const { loading, student } = useGetStudentById(studentId)

	if (loading) return null

	return (
		<div className="details">
			<Tabs defaultActiveKey="1">
				<TabPane tab={`${student.firstName} ${student.lastName}`} key="1">
					<Informations student={student} loading={loading} />
				</TabPane>
				<TabPane tab="Contraintes" key="2">
					<div className="contraints-informations">
						<p>Contraintes</p>
					</div>
				</TabPane>
				<TabPane tab="Calendriers" key="3">
					<div>
						<p>Calendriers</p>
					</div>
				</TabPane>
			</Tabs>
		</div>
	)
}

export default DetailStudent
