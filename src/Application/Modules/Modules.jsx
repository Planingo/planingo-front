import React from 'react'
import './modules.scss'
import Module from './Module/Module'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import AddModule from './Module/Add/AddModule'
import { Spin } from '@planingo/ditto'

const Modules = ({ modules, loading }) => {
	const intl = useIntl()
	
	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (modules.length === 0)
		return (
			<NoData
				Add={AddModule}
				cta={intl.formatMessage({ id: 'add.module' })}
				description={intl.formatMessage({ id: 'no.data.module' })}
				title={intl.formatMessage({ id: 'add.module' })}
			/>
		)
		
	return (
		<div className="modules">
			<Gallery
				datas={modules}
				loading={loading}
				Item={Module}
				Add={AddModule}
				title={intl.formatMessage({ id: 'add.module' })}
			/>
		</div>
	)
}

export default Modules
