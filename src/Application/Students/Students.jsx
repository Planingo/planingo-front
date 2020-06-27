import React from 'react'
import './students.scss'
import Student from './Student/Student'
import AddStudent from './Student/Add/AddStudent'
import { useGetAllStudents } from './students.hooks'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'

const Students = () => {
	const intl = useIntl()
	const { data, loading } = useGetAllStudents()

	if (loading) return <div>Loading....</div>

	if (!data)
		return (
			<NoData
				cta={intl.formatMessage({ id: 'add.student' })}
				description={intl.formatMessage({ id: 'no.data.student' })}
			/>
		)
	return (
		<div className="students">
			<Gallery
				datas={data?.student}
				loading={loading}
				Item={Student}
				Add={AddStudent}
				title={intl.formatMessage({ id: 'add.student' })}
			/>
		</div>
	)
}

export default Students
