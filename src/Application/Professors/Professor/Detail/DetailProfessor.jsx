import React from 'react'
import Calendars from '../../../Layout/Detail/Calendars/calendars'
import { Detail } from '../../../Layout/Detail/Detail'
import { Constraints } from './Constraints/Constraints'
import { useEditConstraints } from '../../../Settings/Constraints/Hook/professorConstraints.hook'
import { useEdit, useGetProfessorById } from '../../professors.hooks'
import EditConstraint from '../Edit/EditConstraint'
import Edit from '../Edit/Edit'
import {
	WifiOutlined,
	EditOutlined,
} from '@ant-design/icons'
import { useParams } from 'react-router'
import { useIntl } from 'react-intl'
import Refinement from '../../../../Components/Refinement/refinement'
import './detailProfessor.scss'
import { Tag } from '@planingo/ditto'

export const DetailProfessor = () => {
	const intl = useIntl()
	const [edit, { loading: editingProfessor }] = useEdit()
    const [editConstraints, {loading: editingProfessorConstraints}] = useEditConstraints()

	const {id} = useParams()
	const {loading, professor} = useGetProfessorById(id)

	if (loading) return null

	return (
		<>
			<Refinement
				backTo="professors"
				FirstActionIcon={WifiOutlined}
				firstActionText={intl.formatMessage({ id: 'edit.professor' })}
				FirstForm={Edit}
				onFirstAction={edit}
				firstActioning={editingProfessor}
				SecondActionIcon={EditOutlined}
				secondActionText={intl.formatMessage({
					id: 'edit.constraints',
				})}
				SecondForm={EditConstraint}
				onSecondAction={editConstraints}
				secondActioning={editingProfessorConstraints}
				mainActionButton={intl.formatMessage({ id: 'edit' })}
				Info={
					<div className='container'>
						<img alt={`${professor.firstName} ${professor.lastName}`} src={`https://avatars.bugsyaya.dev/50/${professor.id}`}/>
						<div className='info-container'>
							<div className='name'><h1>{professor.firstName}</h1> <h1 className='lastName'>{professor.lastName}</h1></div>
							{professor.modules.map(m => m.module.name).map(module => <Tag key={module} type='lesson'>{module}</Tag>)}
						</div>
					</div>
				}
			/>
			<Detail Constraints={<Constraints/>} Calendars={<Calendars/>} />
		</>
	)
}
