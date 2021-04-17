import React from 'react'
import './informations.scss'

const Informations = ({ loading, lesson }) => {
	if (loading) return null

	return (
		<div className="student-informations">
			Info du cours
		</div>
	)
}

export default Informations
