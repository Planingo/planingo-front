import React from 'react'
import './addCompany.scss'
import { Form, Input } from 'antd'
import { useParams } from 'react-router'
import { useGetCompanyById } from '../../companies.hooks'

const AddCompany = ({ setItem }) => {
	const { id } = useParams()
	const { loading: companyLoading, company } = useGetCompanyById(id)

	if (companyLoading) return null

	return (
		<div className="addCompany">
			<Form
				initialValues={company}
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

export default AddCompany
