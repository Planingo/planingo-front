import React from 'react'
import './addProfessor.scss'
import { Form, Input } from 'antd'
import { useParams } from 'react-router'
import { useGetProfessorById } from '../../professors.hooks'

const AddProfessor = ({ setItem }) => {
	const { id } = useParams()
	const { loading: professorLoading, professor } = useGetProfessorById(id)

	if (professorLoading) return null

	return (
		<div className="addProfessor">
			<Form
				initialValues={professor}
				onValuesChange={(values) => {
					setItem((item) => ({ ...item, ...values }))
				}}
				layout="vertical"
				hideRequiredMark
			>
				<Form.Item
					name="lastName"
					label="Nom"
					rules={[{ required: true, message: 'Please enter user name' }]}
				>
					<Input placeholder="Please enter user name" />
				</Form.Item>
				<Form.Item
					name="firstName"
					label="Prénom"
					rules={[{ required: true, message: 'Please enter user name' }]}
				>
					<Input placeholder="Please enter user name" />
				</Form.Item>
			</Form>
		</div>
	)
}

export default AddProfessor
