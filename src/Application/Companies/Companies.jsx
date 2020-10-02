import React from 'react'
import './companies.scss'
import Company from './Company/Company'
import { useGetAllCompagnies } from './companies.hooks'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import AddCompany from './Company/Add/AddCompany'
import { Spin } from 'antd'

const Compagnies = () => {
	const intl = useIntl()
	const { data, loading } = useGetAllCompagnies()

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (!data)
		return (
			<NoData
				Add={AddCompany}
				cta={intl.formatMessage({ id: 'add.company' })}
				description={intl.formatMessage({ id: 'no.data.company' })}
				title={intl.formatMessage({ id: 'add.company' })}
			/>
		)
	return (
		<div className="compagnies">
			<Gallery
				datas={data?.company}
				loading={loading}
				Item={Company}
				Add={AddCompany}
				title={intl.formatMessage({ id: 'add.company' })}
			/>
		</div>
	)
}

export default Compagnies
