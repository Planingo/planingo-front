import React from 'react'
import './detailStudent.scss'

const DetailStudent = (id, pathway) => {
	// const id = useParams()
	console.log(id)
	return (
		<div className="details">
			<div>
				<img
					alt="example"
					src={`https://api.adorable.io/avatars/285/default.png`}
				/>
				<p>Nom</p>
				<p>Prénom</p>
				<p>Adresse</p>
				<p>Code postal</p>
				<p>Date de naissance</p>
				<p>Formation</p>
			</div>
		</div>
	)
}

export default DetailStudent
