import React from 'react'
import './global.scss'
import { Switch } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useIntl } from 'react-intl'

const Global = () => {
	const intl = useIntl()
	return (
		<div className="global">
			<Switch
				checkedChildren={<CheckOutlined />}
				unCheckedChildren={<CloseOutlined />}
			/>
			<p>{intl.formatMessage({ id: 'settings.global.accessiblity' })}</p>
		</div>
	)
}

export default Global
