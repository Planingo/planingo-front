import React from 'react'
import './addPathway.scss'
import { Form, Input } from 'antd'
import { useGetPathwayById } from '../../pathways.hooks'
import { useParams } from 'react-router'

const AddPathway = ({ setItem }) => {
	const { id } = useParams()
	const { loading: pathwayLoading, pathway } = useGetPathwayById(id)

	if (pathwayLoading) return null

	return (
		<div className="addPathway">
			<Form
				initialValues={pathway}
				onValuesChange={(values) => {
					setItem((item) => {
						return { ...pathway, ...item, ...values }
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

export default AddPathway
