import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import React from 'react'
import './modules.scss'
import { Table } from 'antd'
import { Spin } from '@planingo/ditto'
import { withSize } from 'react-sizeme'
import AddModule from './Module/Add/AddModule'

const ModulesList = ({ modules, loading }) => {
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

	if (modules.length === 0)
		return (
			<NoData
				Add={AddModule}
				cta={intl.formatMessage({ id: 'add.module' })}
				description={intl.formatMessage({ id: 'no.data.module' })}
				title={intl.formatMessage({ id: 'add.module' })}
			/>
		)

	return (
		<>
			<div className="modules">
				<Table
					scroll={{ y: Math.floor((window.screen.height - 350)) }}
					tableLayout="fixed"
					pagination={false}
					rowKey={(record) => record.id}
					columns={columns}
					dataSource={modules}
				/>
			</div>
		</>
	)
}

export default withSize({ monitorHeight: true, monitorWidth: false })(
	ModulesList,
)
