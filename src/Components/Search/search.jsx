import { Input } from 'antd'
import React from 'react'
import './search.scss'

const Search = ({ placeholder, onSearch, name, fieldProps, ...props }) => {
	return (
		<div className="search">
			<Input
				placeholder={placeholder}
				onChange={e => onSearch(e.target.value)}
				{...props}
			/>
		</div>
	)
}

export default Search
