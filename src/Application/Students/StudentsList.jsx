import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import React from 'react'
import './students.scss'
import AddStudent from './Student/Add/AddStudent'
import { Table } from 'antd'
import { Spin } from '@planingo/ditto'
import { withSize } from 'react-sizeme'

const StudentsList = ({ students, loading }) => {
	const intl = useIntl()

	const columns = [
		{
			title: 'Photo',
			dataIndex: 'image',
			render: (picture, record) =>
				picture ? (
					<img src={picture} alt={`${record.id} student`} />
				) : (
					<img
						src={`https://avatars.bugsyaya.dev/285/${record.id}`}
						alt="placeholder"
					/>
				),
		},
		{
			title: 'Prénom',
			dataIndex: 'firstName',
		},
		{
			title: 'Nom',
			dataIndex: 'lastName',
		},
		{
			title: 'Formation',
			dataIndex: 'pathway',
			render: (pathway) => pathway.name,
		},
	]

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (students.length === 0)
		return (
			<NoData
				Add={AddStudent}
				cta={intl.formatMessage({ id: 'add.student' })}
				description={intl.formatMessage({ id: 'no.data.student' })}
				title={intl.formatMessage({ id: 'add.student' })}
			/>
		)

	return (
		<>
			<div className="students">
				<Table
					scroll={{ y: Math.floor((window.screen.height - 350)) }}
					tableLayout="fixed"
					pagination={false}
					rowKey={(record) => record.id}
					columns={columns}
					dataSource={students}
				/>
			</div>
		</>
	)
}

export default withSize({ monitorHeight: true, monitorWidth: false })(
	StudentsList,
)
