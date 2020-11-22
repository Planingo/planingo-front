import React from 'react'
import './professors.scss'
import { Link } from 'react-router-dom'

const ProfessorList = ({ data }) => {
	return (
		<div className="professor">
			<Link
				to={`/professors/${data.id}`}
			>{`${data.firstName} ${data.lastName}`}</Link>
		</div>
	)
}

export default ProfessorList
