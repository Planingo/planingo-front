import React from 'react'
import './pathways.scss'
import Pathway from './Pathway/Pathway'
import AddPathway from './Pathway/Add/AddPathway'
import { useGetAllPathways } from './pathways.hooks'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'

const Pathways = () => {
	const intl = useIntl()
	const { data, loading } = useGetAllPathways()

	if (loading) return <div>Loading....</div>

	if (!data)
		return (
			<NoData
				Add={AddPathway}
				cta={intl.formatMessage({ id: 'add.pathway' })}
				description={intl.formatMessage({ id: 'no.data.pathway' })}
				title={intl.formatMessage({ id: 'add.pathway' })}
			/>
		)
	return (
		<div className="pathways">
			<Gallery
				datas={data?.pathway}
				loading={loading}
				Item={Pathway}
				Add={AddPathway}
				title={intl.formatMessage({ id: 'add.pathway' })}
			/>
		</div>
	)
}

export default Pathways
