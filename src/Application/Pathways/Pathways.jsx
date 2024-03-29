import React from 'react'
import './pathways.scss'
import Pathway from './Pathway/Pathway'
import AddPathway from './Pathway/Add/AddPathway'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import { Spin } from '@planingo/ditto'

const Pathways = ({ pathways, loading }) => {
	const intl = useIntl()

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (pathways.length === 0)
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
