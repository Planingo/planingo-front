import { Tabs } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import Calendars from '../../../Calendars/Calendars'
import { useGetStudentById } from '../../students.hooks'
import './detailStudent.scss'
import Informations from './Informations/informations'
import Constraints from './Constraints/Constraints'
import { useStudentConstraints } from '../../../Settings/Constraints/Hook/studentConstraints.hook'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'

const DetailStudent = () => {
	const { id } = useParams()

	const { TabPane } = Tabs

	const { loading, student } = useGetStudentById(id)

    const accountId = useSelector(selectors.accountId)
    const { data: studentData, loading: studentLoading } = useStudentConstraints(accountId)

	if (loading || studentLoading) return null

	console.log(studentData)

	const haveConstraint = Object.values(studentData).includes(true)
	console.log(haveConstraint)

	return (
		<div className="details">
			<Tabs defaultActiveKey="1">
				<TabPane tab={`${student.firstName} ${student.lastName}`} key="1">
					<Informations student={student} loading={loading} />
				</TabPane>
				{haveConstraint &&
					<TabPane tab="Contraintes" key="2">
						<div className="contraints-informations">
							<Constraints />
						</div>
					</TabPane>
				}
				<TabPane tab="Calendriers" key="3">
					<div>
						<Calendars />
					</div>
				</TabPane>
			</Tabs>
		</div>
	)
}

export default DetailStudent
