import React from 'react'
import './companies.scss'
import Company from './Company/Company'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import AddCompany from './Company/Add/AddCompany'
import { Spin } from '@planingo/ditto'

const Companies = ({ companies, loading }) => {
	const intl = useIntl()

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (companies.length === 0)
		return (
			<NoData
				Add={AddCompany}
				cta={intl.formatMessage({ id: 'add.company' })}
				description={intl.formatMessage({ id: 'no.data.company' })}
				title={intl.formatMessage({ id: 'add.company' })}
			/>
		)
		
	return (
		<div className="companies">
			<Gallery
				datas={companies}
				loading={loading}
				Item={Company}
				Add={AddCompany}
				title={intl.formatMessage({ id: 'add.company' })}
			/>
		</div>
	)
}

export default Companies
