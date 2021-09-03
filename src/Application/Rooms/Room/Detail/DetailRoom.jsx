import React from 'react'
import Calendars from '../../../Layout/Detail/Calendars/calendars'
import { Detail } from '../../../Layout/Detail/Detail'
import { Constraints } from './Constraints'
import { useEditConstraints } from '../../../Settings/Constraints/Hook/roomConstraints.hook'
import { useEdit, useGetRoomById } from '../../rooms.hooks'
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

const DetailRoom = () => {
	const intl = useIntl()
	const [edit, { loading: editingRoom }] = useEdit()
    const [editConstraints, {loading: editingRoomConstraints}] = useEditConstraints()

	const {id} = useParams()
	const {loading, room} = useGetRoomById(id)

	if (loading) return null

	return (
		<>
			<Refinement
				backTo="rooms"
				FirstActionIcon={WifiOutlined}
				firstActionText={intl.formatMessage({ id: 'edit.room' })}
				FirstForm={Edit}
				onFirstAction={edit}
				firstActioning={editingRoom}
				SecondActionIcon={EditOutlined}
				secondActionText={intl.formatMessage({
					id: 'edit.constraints',
				})}
				SecondForm={EditConstraint}
				onSecondAction={editConstraints}
				secondActioning={editingRoomConstraints}
				mainActionButton={intl.formatMessage({ id: 'edit' })}
				Info={
					<h1>{room.name}</h1>
				}
			/>
			<Detail Constraints={<Constraints/>} Calendars={<Calendars/>} />
			<Footer />
		</>
	)
}

export default DetailRoom
