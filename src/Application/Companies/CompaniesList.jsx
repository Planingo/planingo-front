import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import React from 'react'
import './companies.scss'
import AddCompany from './Company/Add/AddCompany'
import { Table } from 'antd'
import { withSize } from 'react-sizeme'
import { Spin } from '@planingo/ditto'

const CompaniesList = ({ companies, loading }) => {
	const intl = useIntl()

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

	if (companies.length === 0)
		return (
			<NoData
				Add={AddCompany}
				cta={intl.formatMessage({ id: 'add.company' })}
				description={intl.formatMessage({ id: 'no.data.company' })}
				title={intl.formatMessage({ id: 'add.company' })}
			/>
		)

	return (
		<>
			<div className="companies">
				<Table
					scroll={{ y: Math.floor((window.screen.height - 350)) }}
					tableLayout="fixed"
					pagination={false}
					rowKey={(record) => record.id}
					columns={columns}
					dataSource={companies}
				/>
			</div>
		</>
	)
}

export default withSize({ monitorHeight: true, monitorWidth: false })(
	CompaniesList,
)
