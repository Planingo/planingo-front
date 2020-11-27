import React from 'react'
import './gallery.scss'

const Gallery = ({ loading, datas, Item, Add, title }) => {
	if (loading) return <p>{loading}</p>

	return (
		<>
			<div className="gallery">
				{datas && datas.map((data) => <Item data={data} key={data.id} />)}
			</div>
		</>
	)
}

export default Gallery
