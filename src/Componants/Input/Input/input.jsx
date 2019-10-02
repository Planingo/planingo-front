import React from 'react'
import { Input as InputReact } from 'element-react'

const Input = ({ placeholder, disabled, icon }) => {
	return (
		<div>
			<InputReact placeholder={placeholder} disabled={disabled} icon={icon} />
		</div>
	)
}

export default Input
