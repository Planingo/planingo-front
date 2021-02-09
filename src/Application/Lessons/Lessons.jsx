import React from 'react'
import './lessons.scss'
import Lesson from './Lesson/Lesson'
import AddLesson from './Lesson/Add/AddLesson'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import { Spin } from '@planingo/ditto'
import { useGetAllLessons } from './lessons.hooks'

const Lessons = ({ lessonSearch }) => {
	const intl = useIntl()
	const { data, loading } = useGetAllLessons()

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (!data)
		return (
			<NoData
				Add={AddLesson}
				cta={intl.formatMessage({ id: 'add.lesson' })}
				description={intl.formatMessage({ id: 'no.data.lesson' })}
				title={intl.formatMessage({ id: 'add.lesson' })}
			/>
		)

	const lessons = lessonSearch
		? data.lesson.filter((c) =>
				c.name.toLowerCase().includes(lessonSearch.toLowerCase()),
		  )
		: data.lesson

	return (
		<div className="lessons">
			<Gallery
				datas={lessons}
				loading={loading}
				Item={Lesson}
				Add={AddLesson}
				title={intl.formatMessage({ id: 'add.lesson' })}
			/>
		</div>
	)
}

export default Lessons
