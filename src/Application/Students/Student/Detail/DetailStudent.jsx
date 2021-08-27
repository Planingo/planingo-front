import { Tag } from '@planingo/ditto'
import React from 'react'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router'
import Refinement from '../../../../Components/Refinement/refinement'
import Calendars from '../../../Layout/Detail/Calendars/calendars'
import { Detail } from '../../../Layout/Detail/Detail'
import { useEditConstraints } from '../../../Settings/Constraints/Hook/studentConstraints.hook'
import { useEdit, useGetStudentById } from '../../students.hooks'
import { Constraints } from './Constraints/Constraints'
import {
	WifiOutlined,
	EditOutlined,
} from '@ant-design/icons'
import EditConstraint from '../Edit/EditConstraint'
import Edit from '../Edit/Edit'

const DetailStudent = () => {
	const intl = useIntl()
	const [edit, { loading: editingStudent }] = useEdit()
    const [editConstraints, {loading: editingStudentConstraints}] = useEditConstraints()

	const {id} = useParams()
	const {loading, student} = useGetStudentById(id)

	if (loading) return null

	console.log(student)

	return (
		<>
			<Refinement
				backTo="students"
				FirstActionIcon={WifiOutlined}
				firstActionText={intl.formatMessage({ id: 'edit.student' })}
				FirstForm={Edit}
				onFirstAction={edit}
				firstActioning={editingStudent}
				SecondActionIcon={EditOutlined}
				secondActionText={intl.formatMessage({
					id: 'edit.constraints',
				})}
				SecondForm={EditConstraint}
				onSecondAction={editConstraints}
				secondActioning={editingStudentConstraints}
				mainActionButton={intl.formatMessage({ id: 'edit' })}
				Info={
					<div className='container'>
						<img alt={`${student.firstName} ${student.lastName}`} src={`https://avatars.bugsyaya.dev/50/${student.id}`}/>
						<div className='info-container'>
							<div className='name'><h1>{student.firstName}</h1> <h1 className='lastName'>{student.lastName}</h1></div>
							{<Tag>{student.pathway.name}</Tag>}
						</div>
					</div>
				}
			/>
			<Detail Constraints={<Constraints/>} Calendars={<Calendars/>} />
		</>
	)
}

export default DetailStudent
