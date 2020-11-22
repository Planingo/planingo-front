import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import React from 'react'
import './professors.scss'
import AddProfessor from './Professor/Add/AddProfessor'
import { useGetAllProfessors } from './professors.hooks'
import { Table, Spin } from 'antd'
import { withSize } from 'react-sizeme'

const ProfessorsList = ({ professorSearch }) => {
	const intl = useIntl()
	const { data, loading } = useGetAllProfessors()
	function onChange(pagination, filters, sorter, extra) {
		console.log('params', pagination, filters, sorter, extra)
	}

	const columns = [
		{
			title: 'Photo',
			dataIndex: 'image',
			render: (picture, record) =>
				picture ? (
					<img src={picture} alt={`${record.id} professor image`} />
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

	if (!data)
		return (
			<NoData
				Add={AddProfessor}
				cta={intl.formatMessage({ id: 'add.professor' })}
				description={intl.formatMessage({ id: 'no.data.professor' })}
				title={intl.formatMessage({ id: 'add.professor' })}
			/>
		)

	const professors = professorSearch
		? data.professor.filter(
				(s) =>
					s.lastName.toLowerCase().includes(professorSearch.toLowerCase()) ||
					s.firstName.toLowerCase().includes(professorSearch.toLowerCase()),
		  )
		: data.professor
	return (
		<>
			<div className="professors">
				<Table
					tableLayout="fixed"
					pagination={false}
					rowKey={(record) => record.id}
					columns={columns}
					dataSource={professors}
					onChange={onChange}
				/>
			</div>
		</>
	)
}

export default withSize({ monitorHeight: true, monitorWidth: false })(
	ProfessorsList,
)
