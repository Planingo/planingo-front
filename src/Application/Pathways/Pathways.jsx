import React from 'react'
import './pathways.scss'
import Pathway from './Pathway/Pathway'
import AddPathway from './Pathway/Add/AddPathway'
import { useGetAllPathways } from './pathways.hooks'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import { Spin } from 'antd'

const Pathways = ({ pathwaySearch }) => {
	const intl = useIntl()
	const { data, loading } = useGetAllPathways()

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (!data)
		return (
			<NoData
				Add={AddPathway}
				cta={intl.formatMessage({ id: 'add.pathway' })}
				description={intl.formatMessage({ id: 'no.data.pathway' })}
				title={intl.formatMessage({ id: 'add.pathway' })}
			/>
		)

	const pathways = pathwaySearch
		? data.pathway.filter((c) =>
				c.name.toLowerCase().includes(pathwaySearch.toLowerCase()),
		  )
		: data.pathway

	return (
		<div className="pathways">
			<Gallery
				datas={pathways}
				loading={loading}
				Item={Pathway}
				Add={AddPathway}
				title={intl.formatMessage({ id: 'add.pathway' })}
			/>
		</div>
	)
}

export default Pathways
