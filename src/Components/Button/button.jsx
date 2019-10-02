import React from 'react'
import { Button as ButtonReact } from 'element-react'

const Button = ({ ...props }) => {
	return <ButtonReact {...props} />
}

export default Button
