import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { useIntl } from 'react-intl'
import { Redirect } from 'react-router'
import { useDeleteCompanyById } from '../../../companies.hooks'
import './informations.scss'

const Informations = ({ loading, company }) => {
	const intl = useIntl()

	const [
		deleteCompanyById,
		{ loading: deletedLoading, company: deletedCompany },
	] = useDeleteCompanyById(company.id)

	if (loading) return null
	if (deletedLoading) return null

	if (deletedCompany) return <Redirect to="/companies" />

	return (
		<div className="student-informations">
			<img
				alt="example"
				src={`https://avatars.bugsyaya.dev/285/${company.id}`}
			/>
			<div>
				<p className="student-name">{company.name}</p>
			</div>
			<Button
				className="delete"
				onClick={() => deleteCompanyById()}
				type="primary"
				danger
			>
				<>
					<DeleteOutlined />
					<p>{intl.formatMessage({ id: 'delete.company' })}</p>
				</>
			</Button>
		</div>
	)
}

export default Informations
