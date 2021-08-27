import React from 'react'
import { useIntl } from 'react-intl'
import { Constraints } from './Constraints'
import { useParams } from 'react-router'
import Calendars from '../../../Layout/Detail/Calendars/calendars'
import { Detail } from '../../../Layout/Detail/Detail'
import { useEditConstraints } from '../../../Settings/Constraints/Hook/pathwayConstraints.hook'
import { useEdit, useGetPathwayById } from '../../pathways.hooks'
import EditConstraint from './Edit/EditConstraint'
import {
	TeamOutlined,
	EditOutlined,
} from '@ant-design/icons'
import Refinement from '../../../../Components/Refinement/refinement'
import AddPathway from '../Add/AddPathway'

const DetailPathway = () => {
	const intl = useIntl()
	const [edit, { loading: editingPathway }] = useEdit()
    const [editConstraints, {loading: editingPathwayConstraints}] = useEditConstraints()

	const {id} = useParams()
	const {loading, pathway} = useGetPathwayById(id)

	if (loading) return null

	return (
		<>
			<Refinement
				backTo="pathways"
				FirstActionIcon={TeamOutlined}
				firstActionText={intl.formatMessage({ id: 'edit.pathway' })}
				FirstForm={AddPathway}
				onFirstAction={edit}
				firstActioning={editingPathway}
				SecondActionIcon={EditOutlined}
				secondActionText={intl.formatMessage({
					id: 'edit.constraints',
				})}
				SecondForm={EditConstraint}
				onSecondAction={editConstraints}
				secondActioning={editingPathwayConstraints}
				mainActionButton={intl.formatMessage({ id: 'edit' })}
				Info={
					<h1>{pathway.name}</h1>
				}
			/>
			<Detail Constraints={<Constraints/>} Calendars={<Calendars/>} />
		</>
	)
}

export default DetailPathway
