import React from 'react'
import './professors.scss'
import Professor from './Professor/Professor'
import { useGetAllProfessors } from './professors.hooks'

const Professors = () => {
	const { data, loading } = useGetAllProfessors()

	if (loading) return <div>Loading....</div>
	return (
		<div className="professors">
			{data?.professor.map(prof => (
				<Professor
					key={prof.id}
					firstName={prof.firstName}
					lastName={prof.lastName}
					modules={prof.modules}
				/>
			))}
		</div>
	)
}

export default Professors
