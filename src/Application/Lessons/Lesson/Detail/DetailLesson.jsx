import React from 'react'
import { Constraints } from './Constraints'
import { Detail } from '../../../Layout/Detail/Detail'
import Calendars from '../../../Layout/Detail/Calendars/calendars'
import { useEditConstraints } from '../../../Settings/Constraints/Hook/lessonConstraints.hook'
import { useEdit, useGetLessonById } from '../../lessons.hooks'
import EditConstraint from '../Edit/EditConstraint'
import Edit from '../Edit/Edit'
import {
	WifiOutlined,
	EditOutlined,
} from '@ant-design/icons'
import { useParams } from 'react-router'
import { useIntl } from 'react-intl'
import Refinement from '../../../../Components/Refinement/refinement'

const DetailLesson = () => {
	const intl = useIntl()
	const [edit, { loading: editingLesson }] = useEdit()
    const [editConstraints, {loading: editingLessonConstraints}] = useEditConstraints()

	const {id} = useParams()
	const {loading, lesson} = useGetLessonById(id)

	if (loading) return null

	return (
		<>
			<Refinement
				backTo="lessons"
				FirstActionIcon={WifiOutlined}
				firstActionText={intl.formatMessage({ id: 'edit.lesson' })}
				FirstForm={Edit}
				onFirstAction={edit}
				firstActioning={editingLesson}
				SecondActionIcon={EditOutlined}
				secondActionText={intl.formatMessage({
					id: 'edit.constraints',
				})}
				SecondForm={EditConstraint}
				onSecondAction={editConstraints}
				secondActioning={editingLessonConstraints}
				mainActionButton={intl.formatMessage({ id: 'edit' })}
				Info={
					<h1>{lesson.name}</h1>
				}
			/>
			<Detail Constraints={<Constraints/>} Calendars={<Calendars/>} />
		</>
	)
}

export default DetailLesson
