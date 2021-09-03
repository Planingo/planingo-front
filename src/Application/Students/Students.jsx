import React from 'react'
import './students.scss'
import Student from './Student/Student'
import AddStudent from './Student/Add/AddStudent'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import { Spin } from '@planingo/ditto'

const Students = ({ students, loading }) => {
	const intl = useIntl()

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (students.length === 0)
		return (
			<NoData
				Add={AddStudent}
				cta={intl.formatMessage({ id: 'add.student' })}
				description={intl.formatMessage({ id: 'no.data.student' })}
				title={intl.formatMessage({ id: 'add.student' })}
			/>
		)

	return (
		<>
			<div className="students">
				<Gallery
					datas={students}
					loading={loading}
					Item={Student}
					Add={AddStudent}
					title={intl.formatMessage({ id: 'add.student' })}
				/>
			</div>
		</>
	)
}

export default Students
