import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import React from 'react'
import './lessons.scss'
import { Table } from 'antd'
import { Spin } from '@planingo/ditto'
import { withSize } from 'react-sizeme'
import AddLesson from './Lesson/Add/AddLesson'

const LessonsList = ({ lessons, loading }) => {
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

	if (lessons.lentgh === 0)
		return (
			<NoData
				Add={AddLesson}
				cta={intl.formatMessage({ id: 'add.lesson' })}
				description={intl.formatMessage({ id: 'no.data.lesson' })}
				title={intl.formatMessage({ id: 'add.lesson' })}
			/>
		)

	return (
		<>
			<div className="lessons">
				<Table
					scroll={{ y: Math.floor((window.screen.height - 350)) }}
					tableLayout="fixed"
					pagination={false}
					rowKey={(record) => record.id}
					columns={columns}
					dataSource={lessons}
				/>
			</div>
		</>
	)
}

export default withSize({ monitorHeight: true, monitorWidth: false })(
	LessonsList,
)
