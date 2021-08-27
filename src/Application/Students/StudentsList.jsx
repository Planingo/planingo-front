import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import React from 'react'
import './students.scss'
import AddStudent from './Student/Add/AddStudent'
import { useGetAllStudents } from './students.hooks'
import { Table } from 'antd'
import { Spin } from '@planingo/ditto'
import { withSize } from 'react-sizeme'

const StudentsList = ({ studentSearch }) => {
	const intl = useIntl()
	const { data, loading } = useGetAllStudents()
	function onChange(pagination, filters, sorter, extra) {
	}

	const uniqueP =
		(data && new Set(data.student.map((s) => s.pathway.name))) || []


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
			filters: [...uniqueP].map((s) => ({ text: s, value: s })),
			onFilter: (value, record) => record.pathway.name === value,
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
				Add={AddStudent}
				cta={intl.formatMessage({ id: 'add.student' })}
				description={intl.formatMessage({ id: 'no.data.student' })}
				title={intl.formatMessage({ id: 'add.student' })}
			/>
		)

	const students = studentSearch
		? data.student.filter((s) =>
			s.lastName.toLowerCase().includes(studentSearch.toLowerCase()) ||
			s.firstName.toLowerCase().includes(studentSearch.toLowerCase()))
		: data.student
	return (
		<>
			<div className="students">
				<Table
					tableLayout="fixed"
					pagination={false}
					rowKey={(record) => record.id}
					columns={columns}
					dataSource={students}
					onChange={onChange}
				/>
			</div>
		</>
	)
}

export default withSize({ monitorHeight: true, monitorWidth: false })(
	StudentsList,
)
