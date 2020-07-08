import React from 'react'
import './lessons.scss'
import Lesson from './Lesson/Lesson'
import AddLesson from './Lesson/Add/AddLesson'
import { useGetAllStudents } from './lessons.hooks'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'

const Lessons = () => {
	const intl = useIntl()
	const { data, loading } = useGetAllStudents()

	if (loading) return <div>Loading....</div>

	if (!data)
		return (
			<NoData
				cta={intl.formatMessage({ id: 'add.lessons' })}
				description={intl.formatMessage({ id: 'no.data.lessons' })}
			/>
		)
	return (
		<div className="lessons">
			<Gallery
				datas={data?.lesson}
				loading={loading}
				Item={Lesson}
				Add={AddLesson}
				title={intl.formatMessage({ id: 'add.lessons' })}
			/>
		</div>
	)
}

export default Lessons
