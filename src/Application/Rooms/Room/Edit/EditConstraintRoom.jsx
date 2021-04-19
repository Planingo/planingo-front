import React from 'react'
import './editConstraintRoom.scss'
import { Form, InputNumber } from 'antd'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'
import { useGetRoomConstraints, useRoomConstraintsSetting } from '../../../Settings/Constraints/Hook/roomConstraints.hook'
import { useParams } from 'react-router'

const EditConstraintRoom = ({ setItem }) => {
    const accountId = useSelector(selectors.accountId)
	const { id } = useParams()
    const { data: roomConstraintsSetting, loading: loadingRoomConstraintsSetting} = useRoomConstraintsSetting(accountId)
	const { data: roomConstraints, loading: loadingRoomConstraints } = useGetRoomConstraints(id)

	if (loadingRoomConstraintsSetting || loadingRoomConstraints) return null

	return (
		<div className="editRoom">
			<Form
				initialValues={roomConstraints?.constraints}
				onValuesChange={(values) => {
					setItem((item) => ({ ...item, ...values }))
				}}
				layout="vertical"
				hideRequiredMark
			>
				{roomConstraintsSetting?.capacity && 
					<Form.Item 
						name="capacity" 
						label="Capacité de la salle"
					>
						<InputNumber />
					</Form.Item>
				}
			</Form>
		</div>
	)
}

export default EditConstraintRoom
