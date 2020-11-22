import { Input } from 'antd'
import React from 'react'
import './search.scss'

const Search = ({ placeholder, onSearch, ...props }) => {
	return (
		<div className="search">
			<Input.Search placeholder={placeholder} onSearch={onSearch} />
		</div>
	)
}

export default Search
