import React from 'react'
import './students.scss'
import Student from './Student/Student'
import { useGetAllStudents } from './students.hooks'

const Students = () => {
	const { data, loading } = useGetAllStudents()

	if (loading) return <div>Loading....</div>
	return (
		<div className="students">
			{data?.student.map(stud => (
				<Student
					key={stud.id}
					firstName={stud.firstName}
					lastName={stud.lastName}
					pathway={stud.pathway}
				/>
			))}
		</div>
	)
}

export default Students
