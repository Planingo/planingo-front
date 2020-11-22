import React from 'react'
import './addStudent.scss'
import { Form, Input, Select } from 'antd'
import { useGetAllPathways } from '../../../Pathways/pathways.hooks'
import { useGetStudentById } from '../../students.hooks'
import { useParams } from 'react-router'

const AddStudent = ({ setItem }) => {
	const { id } = useParams()

	const { Option } = Select

	const { loading: studentLoading, student } = useGetStudentById(id)
	const { data, loading } = useGetAllPathways()

	if (studentLoading) return null

	return (
		<div className="addStudent">
			<Form
				initialValues={student}
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
				<Form.Item
					name="pathwayId"
					label="Formation"
					rules={[{ required: true, message: 'Please choose a pathway' }]}
				>
					<Select>
						{!loading &&
							data.pathway.map((path) => (
								<Option key={path.id}>{path.name}</Option>
							))}
					</Select>
				</Form.Item>
			</Form>
		</div>
	)
}

export default AddStudent
