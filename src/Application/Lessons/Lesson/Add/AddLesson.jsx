import React from 'react'
import './addLesson.scss'
import { Form, Input } from 'antd'
import { useGetLessonById } from '../../lessons.hooks'
import { useParams } from 'react-router'

const AddLesson = ({ setItem }) => {
	const { id } = useParams()
	const { loading: lessonLoading, lesson } = useGetLessonById(id)

	if (lessonLoading) return null

	return (
		<div className="addLesson">
			<Form
				initialValues={lesson}
				onValuesChange={(values) => {
					setItem((item) => {
						return { ...lesson, ...item, ...values }
					})
				}}
				layout="vertical"
				hideRequiredMark
			>
				<Form.Item
					name="name"
					label="Nom"
					rules={[{ required: true, message: 'Please enter user name' }]}
				>
					<Input placeholder="Please enter user name" />
				</Form.Item>
			</Form>
		</div>
	)
}

export default AddLesson
