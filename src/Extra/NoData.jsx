import React from 'react'
import './noData.scss'
import { Empty } from 'antd'
import { useIntl } from 'react-intl'
import AddFirstItem from '../Application/Layout/Add/AddFirstItem'

const NoData = ({ description, cta, Add, title }) => {
	const intl = useIntl()
	return (
		<div className="noData">
			<Empty
				description={
					<p>{description || intl.formatMessage({ id: 'no.data' })}</p>
				}
			>
				<AddFirstItem title={title} cta={cta}>
					<Add />
				</AddFirstItem>
			</Empty>
		</div>
	)
}

export default NoData
