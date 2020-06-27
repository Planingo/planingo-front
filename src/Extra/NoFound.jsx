import React from 'react'
import './noData.scss'
import { Result, Button } from 'antd'

const NoFound = () => {
	return (
		<div className="notFound">
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={<Button type="primary">Back Home</Button>}
			/>
		</div>
	)
}

export default NoFound
