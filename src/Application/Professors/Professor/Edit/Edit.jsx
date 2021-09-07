import React, { useState } from 'react'
import './edit.scss'
import { Form, Input, Select } from 'antd'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useGetAllPathways } from '../../../Pathways/pathways.hooks'
import { useGetProfessorById } from '../../professors.hooks'
import { useParams } from 'react-router'
import { useGetAllCompanies } from '../../../Companies/companies.hooks'

const Edit = ({ setItem }) => {
	const { id } = useParams()

	const [apprentice, setApprentice] = useState(false)
	const { Option } = Select

	const { loading: professorLoading, professor } = useGetProfessorById(id)
	const { data, loading } = useGetAllPathways()
	const companies = useGetAllCompanies()
	
	if (professorLoading || companies.loading) return null

	return (
		<div className="addProfessor">
			<Form
				initialValues={professor}
				onValuesChange={(values) => {
					setItem((item) => ({ ...professor, ...item, ...values }))
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
						<Input placeholder="Potter" />
					</Form.Item>
					<Form.Item
						name="firstName"
						label="Prénom"
						rules={[{ required: true, message: 'Merci de renseigner le prénom' }]}
					>
						<Input placeholder="Harry" />
					</Form.Item>
				</div>
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
				<Form.Item
					name="apprentice"
					label="Apprentissage"
				>
					<Switch
							checkedChildren={<CheckOutlined />}
							unCheckedChildren={<CloseOutlined />}
							checked={apprentice}
							onChange={() => setApprentice(!apprentice)}
						/>
				</Form.Item>
				{apprentice && 
					<Form.Item
						name="compagnies"
						label="Entreprise"
						rules={[{ required: true, message: 'Please choose a pathway' }]}
					>
						<Select>
							{!companies.loading &&
								companies.data.company.map((company) => (
									<Option key={company.id}>{company.name}</Option>
								))}
						</Select>
					</Form.Item>
				}
			</Form>
		</div>
	)
}

export default Edit
