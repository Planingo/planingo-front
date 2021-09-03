import React from 'react'
import Calendars from '../../../Layout/Detail/Calendars/calendars'
import { Detail } from '../../../Layout/Detail/Detail'
import { Constraints } from './Constraints'
import { useEditConstraints } from '../../../Settings/Constraints/Hook/moduleConstraints.hook'
import { useEdit, useGetModuleById } from '../../modules.hooks'
import EditConstraint from '../Edit/EditConstraint'
import Edit from '../Edit/Edit'
import {
	WifiOutlined,
	EditOutlined,
} from '@ant-design/icons'
import { useParams } from 'react-router'
import { useIntl } from 'react-intl'
import Refinement from '../../../../Components/Refinement/refinement'
import { Footer } from '../../../Layout/Footer/Footer'

const DetailModule = () => {
	const intl = useIntl()
	const [edit, { loading: editingModule }] = useEdit()
    const [editConstraints, {loading: editingModuleConstraints}] = useEditConstraints()

	const {id} = useParams()
	const {loading, module} = useGetModuleById(id)

	if (loading) return null

	return (
		<>
			<Refinement
				backTo="modules"
				FirstActionIcon={WifiOutlined}
				firstActionText={intl.formatMessage({ id: 'edit.module' })}
				FirstForm={Edit}
				onFirstAction={edit}
				firstActioning={editingModule}
				SecondActionIcon={EditOutlined}
				secondActionText={intl.formatMessage({
					id: 'edit.constraints',
				})}
				SecondForm={EditConstraint}
				onSecondAction={editConstraints}
				secondActioning={editingModuleConstraints}
				mainActionButton={intl.formatMessage({ id: 'edit' })}
				Info={
					<h1>{module.name}</h1>
				}
			/>
			<Detail Constraints={<Constraints/>} Calendars={<Calendars/>} />
			<Footer />
		</>
	)
}

export default DetailModule
