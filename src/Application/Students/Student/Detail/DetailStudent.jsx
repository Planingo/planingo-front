import { last } from 'lodash'
import React from 'react'
import { useLocation } from 'react-router'
import { useGetStudentById } from '../../students.hooks'
import './detailStudent.scss'

const DetailStudent = () => {
	const location = useLocation()

	const studentId = last(
		location.pathname.split('/').filter((path) => path !== ''),
	)

	const { loading, student } = useGetStudentById(studentId)

	if (loading) return null

	return (
		<div className="details">
			<div className="student-informations">
				<img
					alt="example"
					src={`https://avatars.bugsyaya.dev/285/${student.id}_${student.pathwayId}`}
				/>
				<div>
					<p className="student-name">
						{student.firstName} {student.lastName}
					</p>
					<div className="align">
						<p>Formation :</p>
						<p>{student.pathway.name}</p>
					</div>

					<div className="align">
						<p>Apprentissage :</p>
						<p>
							{student.apprenticeships.lenght
								? student.apprenticeships.map(
										(apprenticeship) => apprenticeship.company.name,
								  )
								: '-'}
						</p>
					</div>
				</div>
			</div>
			<div className="contraints-informations"></div>
		</div>
	)
}

export default DetailStudent
