import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import React from 'react'
import './pathways.scss'
import { Table } from 'antd'
import { Spin } from '@planingo/ditto'
import { withSize } from 'react-sizeme'
import AddPathway from './Pathway/Add/AddPathway'

const PathwaysList = ({ pathways, loading }) => {
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

	if (!pathways.length === 0)
		return (
			<NoData
				Add={AddPathway}
				cta={intl.formatMessage({ id: 'add.pathway' })}
				description={intl.formatMessage({ id: 'no.data.pathway' })}
				title={intl.formatMessage({ id: 'add.pathway' })}
			/>
		)

	return (
		<>
			<div className="pathways">
				<Table
					scroll={{ y: Math.floor((window.screen.height - 350)) }}
					tableLayout="fixed"
					pagination={false}
					rowKey={(record) => record.id}
					columns={columns}
					dataSource={pathways}
				/>
			</div>
		</>
	)
}

export default withSize({ monitorHeight: true, monitorWidth: false })(
	PathwaysList,
)
