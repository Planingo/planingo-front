import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import React from 'react'
import './modules.scss'
import { Table } from 'antd'
import { Spin } from '@planingo/ditto'
import { withSize } from 'react-sizeme'
import AddModule from './Module/Add/AddModule'
import { useGetAllModules } from './modules.hooks'

const ModulesList = ({ moduleSearch }) => {
	const intl = useIntl()
	const { data, loading } = useGetAllModules()
	function onChange(pagination, filters, sorter, extra) {
		console.log('params', pagination, filters, sorter, extra)
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
				Add={AddModule}
				cta={intl.formatMessage({ id: 'add.module' })}
				description={intl.formatMessage({ id: 'no.data.module' })}
				title={intl.formatMessage({ id: 'add.module' })}
			/>
		)

	const modules = moduleSearch
		? data.module.filter((c) =>
				c.name.toLowerCase().includes(moduleSearch.toLowerCase()),
		  )
		: data.module

	return (
		<>
			<div className="modules">
				<Table
					tableLayout="fixed"
					pagination={false}
					rowKey={(record) => record.id}
					columns={columns}
					dataSource={modules}
					onChange={onChange}
				/>
			</div>
		</>
	)
}

export default withSize({ monitorHeight: true, monitorWidth: false })(
	ModulesList,
)
