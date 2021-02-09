import React from 'react'
import './global.scss'
import { Button, Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useIntl } from 'react-intl'
import { useReset } from '../../../Generate/reset.hooks'
import { useApolloClient } from '@apollo/client'

const Global = () => {
	const intl = useIntl()

	const reset = useReset()

	const client = useApolloClient()

	return (
		<div className="global">
			<Switch
				checkedChildren={<CheckOutlined />}
				unCheckedChildren={<CloseOutlined />}
			/>
			<p>{intl.formatMessage({ id: 'settings.global.accessiblity' })}</p>

			<Button
				type="primary"
				danger
				onClick={async () => {
					await reset()
					client.clearStore()
				}}
			>
				RESET
			</Button>
		</div>
	)
}

export default Global
