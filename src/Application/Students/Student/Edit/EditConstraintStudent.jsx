import React, { useState } from 'react'
import './editConstraintStudent.scss'
import { Form, Input, Select, Switch } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useGetAllPathways } from '../../../Pathways/pathways.hooks'
import { useGetStudentById } from '../../students.hooks'
import { useParams } from 'react-router'
import { useGetAllCompanies } from '../../../Companies/companies.hooks'
import { StudentConstraints } from '../Detail/Constraints'

const EditConstraintStudent = ({ setItem }) => {
	const { id } = useParams()

	const [apprentice, setApprentice] = useState(false)
	const { Option } = Select

	const { loading: studentLoading, student } = useGetStudentById(id)
	const { data, loading } = useGetAllPathways()
	const companies = useGetAllCompanies()
	
	function onChange(e) {
		console.log(`checked = ${e.target.checked}`);
	}

	if (studentLoading || companies.loading) return null

	return (
		<div className="addStudent">
			<Form
				initialValues={student}
				onValuesChange={(values) => {
					setItem((item) => ({ ...item, ...values }))
				}}
				layout="vertical"
				hideRequiredMark
			>
				<StudentConstraints />
			</Form>
		</div>
	)
}

export default EditConstraintStudent
