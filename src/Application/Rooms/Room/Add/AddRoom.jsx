import React from 'react'
import './addRoom.scss'
import { Form, Input } from 'antd'
import { useGetRoomById } from '../../rooms.hooks'
import { useParams } from 'react-router'

const AddRoom = ({ setItem }) => {
	const { id } = useParams()
	const { loading: roomLoading, room } = useGetRoomById(id)

	if (roomLoading) return null

	return (
		<div className="addRoom">
			<Form
				initialValues={room}
				onValuesChange={(values) => {
					setItem((item) => {
						return { ...item, ...values }
					})
				}}
				layout="vertical"
				hideRequiredMark
			>
				<Form.Item
					name="name"
					label="Nom"
					rules={[{ required: true, message: 'Please enter user name' }]}
				>
					<Input placeholder="Please enter user name" />
				</Form.Item>
			</Form>
		</div>
	)
}

export default AddRoom
