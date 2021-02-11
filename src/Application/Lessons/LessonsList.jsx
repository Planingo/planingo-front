import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import React from 'react'
import './lessons.scss'
import { Table } from 'antd'
import { Spin } from '@planingo/ditto'
import { withSize } from 'react-sizeme'
import AddLesson from './Lesson/Add/AddLesson'
import { useGetAllLessons } from './lessons.hooks'

const LessonsList = ({ lessonSearch }) => {
	const intl = useIntl()
	const { data, loading } = useGetAllLessons()
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
				Add={AddLesson}
				cta={intl.formatMessage({ id: 'add.lesson' })}
				description={intl.formatMessage({ id: 'no.data.lesson' })}
				title={intl.formatMessage({ id: 'add.lesson' })}
			/>
		)

	const lessons = lessonSearch
		? data.lesson.filter((c) =>
				c.name.toLowerCase().includes(lessonSearch.toLowerCase()),
		  )
		: data.lesson

	return (
		<>
			<div className="lessons">
				<Table
					tableLayout="fixed"
					pagination={false}
					rowKey={(record) => record.id}
					columns={columns}
					dataSource={lessons}
					onChange={onChange}
				/>
			</div>
		</>
	)
}

export default withSize({ monitorHeight: true, monitorWidth: false })(
	LessonsList,
)
