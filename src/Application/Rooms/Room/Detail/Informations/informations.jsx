import React from 'react'
import './informations.scss'

const Informations = ({ loading, room }) => {
	if (loading) return null

	return (
		<div className="student-informations">
			Info de la salle
		</div>
	)
}

export default Informations
