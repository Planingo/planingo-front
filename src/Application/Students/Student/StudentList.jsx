import React from 'react'
import './student.scss'
import { Link } from 'react-router-dom'

const StudentList = ({ data }) => {
	return (
		<div className="student">
			<Link
				to={`/students/${data.id}`}
			>{`${data.firstName} ${data.lastName}`}</Link>
		</div>
	)
}

export default StudentList
