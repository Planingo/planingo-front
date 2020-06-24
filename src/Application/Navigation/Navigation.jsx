import React from 'react'
import './navigation.scss'
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<div className="navigation">
			<Link to="/students">Étudiants</Link>
			<Link to="/professors">Professeurs</Link>
		</div>
	)
}

export default Navigation
