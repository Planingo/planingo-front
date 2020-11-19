import { Input } from 'antd'
import React from 'react'
import './search.scss'

const Search = ({ placeholder, ...props }) => {
	return (
		<div className="search">
			<Input.Search placeholder={placeholder} />
		</div>
	)
}

export default Search
