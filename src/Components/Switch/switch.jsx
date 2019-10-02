import React from 'react'
import { Switch as SwitchReact } from 'element-react'

const Switch = ({ label, ...props }) => {
	return (
		<div>
			<SwitchReact {...props} />
			{label}
		</div>
	)
}

export default Switch
