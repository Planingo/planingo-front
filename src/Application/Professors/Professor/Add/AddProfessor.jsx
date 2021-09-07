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
					setItem((item) => {
						return { ...professor, ...item, ...values }
					})
				}}
				layout="vertical"
				hideRequiredMark
			>
				<div className="add-professor-form">
					<Form.Item
						name="lastName"
						label="Nom"
						rules={[{ required: true, message: 'Merci de renseigner le nom' }]}
					>
						<Input placeholder="Babbling" />
					</Form.Item>
					<Form.Item
						name="firstName"
						label="Prénom"
						rules={[{ required: true, message: 'Merci de renseigner le prénom' }]}
					>
						<Input placeholder="Horace" />
					</Form.Item>
				</div>
			</Form>
		</div>
	)
}

export default AddProfessor
