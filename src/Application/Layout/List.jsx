import React from 'react'
import './gallery.scss'

const List = ({ loading, datas, Item, Add, title }) => {
	if (loading) return <p>{loading}</p>
	return (
		<div className="list">
			{datas.map(data => (
				<Item data={data} key={data.id} />
			))}
		</div>
	)
}

export default List
