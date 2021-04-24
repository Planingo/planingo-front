import React from 'react'
import './addModule.scss'
import { Form, Input } from 'antd'
import { useGetModuleById } from '../../modules.hooks'
import { useParams } from 'react-router'

const AddModule = ({ setItem }) => {
	const { id } = useParams()
	const { loading: moduleLoading, module } = useGetModuleById(id)

	if (moduleLoading) return null

	return (
		<div className="addModule">
			<Form
				initialValues={module}
				onValuesChange={(values) => {
					setItem((item) => {
						return { ...module, ...item, ...values }
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

export default AddModule
