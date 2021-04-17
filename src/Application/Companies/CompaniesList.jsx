import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import React from 'react'
import './companies.scss'
import AddCompany from './Company/Add/AddCompany'
import { useGetAllCompanies } from './companies.hooks'
import { Table } from 'antd'
import { withSize } from 'react-sizeme'
import { Spin } from '@planingo/ditto'

const CompaniesList = ({ companySearch }) => {
	const intl = useIntl()
	const { data, loading } = useGetAllCompanies()
	function onChange(pagination, filters, sorter, extra) {
	}

	const columns = [
		{
			title: 'Photo',
			dataIndex: 'image',
			render: (picture, record) =>
				picture ? (
					<img src={picture} alt={`${record.id} professor`} />
				) : (
					<img
						src={`https://avatars.bugsyaya.dev/285/${record.id}`}
						alt="placeholder"
					/>
				),
		},
		{
			title: 'Name',
			dataIndex: 'name',
		},
	]

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (!data)
		return (
			<NoData
				Add={AddCompany}
				cta={intl.formatMessage({ id: 'add.company' })}
				description={intl.formatMessage({ id: 'no.data.company' })}
				title={intl.formatMessage({ id: 'add.company' })}
			/>
		)

	const companies = companySearch
		? data.company.filter((c) =>
				c.name.toLowerCase().includes(companySearch.toLowerCase()),
		  )
		: data.company

	return (
		<>
			<div className="professors">
				<Table
					tableLayout="fixed"
					pagination={false}
					rowKey={(record) => record.id}
					columns={columns}
					dataSource={companies}
					onChange={onChange}
				/>
			</div>
		</>
	)
}

export default withSize({ monitorHeight: true, monitorWidth: false })(
	CompaniesList,
)
