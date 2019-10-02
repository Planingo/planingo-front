import React from 'react'
import { Button as ButtonReact } from 'element-react'

const Button = ({ ...props }) => {
	return (
		<div>
			<ButtonReact {...props} />
		</div>
	)
}

export default Button
