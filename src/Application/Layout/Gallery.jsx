import React from 'react'
import './gallery.scss'
import AddItem from './Add/AddItem'

const Gallery = ({ loading, datas, Item, Add, title }) => {
	if (loading) return <p>{loading}</p>
	return (
		<>
			<div className="gallery">
				{datas.map(data => (
					<Item data={data} key={data.id} />
				))}
			</div>
		</>
	)
}

export default Gallery
