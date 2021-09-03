import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import React from 'react'
import './professors.scss'
import AddProfessor from './Professor/Add/AddProfessor'
import { Table } from 'antd'
import { Spin } from '@planingo/ditto'
import { withSize } from 'react-sizeme'

const ProfessorsList = ({ professors, loading }) => {
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
			title: 'First name',
			dataIndex: 'firstName',
		},
		{
			title: 'Last name',
			dataIndex: 'lastName',
		},
	]

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (professors.length === 0)
		return (
			<NoData
				Add={AddProfessor}
				cta={intl.formatMessage({ id: 'add.professor' })}
				description={intl.formatMessage({ id: 'no.data.professor' })}
				title={intl.formatMessage({ id: 'add.professor' })}
			/>
		)

	return (
		<>
			<div className="professors">
				<Table
					scroll={{ y: Math.floor((window.screen.height - 350)) }}
					tableLayout="fixed"
					pagination={false}
					rowKey={(record) => record.id}
					columns={columns}
					dataSource={professors}
				/>
			</div>
		</>
	)
}

export default withSize({ monitorHeight: true, monitorWidth: false })(
	ProfessorsList,
)
