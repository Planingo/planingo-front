import React from 'react'
import { Link } from 'react-router-dom'
import './informations.scss'

const Informations = ({ loading, professor }) => {
	if (loading) return null

	console.log(professor.modules.length)

	return (
		<div className="student-informations">
			<img
				alt="example"
				src={`https://avatars.bugsyaya.dev/285/${professor.id}`}
			/>
			<div>
				<p className="student-name">
					{professor.firstName} {professor.lastName}
				</p>
				{/* <div className="align">
					<p>Formation :</p>
						{student.pathway.name}
					</Link>
				</div> */}

				<div className="align">
					<p>Modules :</p>
					<p>
						{professor.modules.length
							? professor.modules.map((m) => (
									<Link to={`/modules/${m.module.id}`} key={m.module.id}>
										{m.module.name}
									</Link>
							  ))
							: '-'}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Informations
