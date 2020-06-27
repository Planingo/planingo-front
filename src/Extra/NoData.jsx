import React from 'react'
import './noData.scss'
import { Empty, Button } from 'antd'
import { useIntl } from 'react-intl'

const NoData = ({ description, cta }) => {
	const intl = useIntl()
	return (
		<div className="noData">
			<Empty
				description={
					<p>{description || intl.formatMessage({ id: 'no.data' })}</p>
				}
			>
				{cta && <Button type="primary">{cta}</Button>}
			</Empty>
		</div>
	)
}

export default NoData
