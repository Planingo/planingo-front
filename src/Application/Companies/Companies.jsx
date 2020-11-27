import React from 'react'
import './companies.scss'
import Company from './Company/Company'
import { useGetAllCompanies } from './companies.hooks'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import AddCompany from './Company/Add/AddCompany'
import { Spin } from 'antd'

const Companies = ({ companySearch }) => {
	const intl = useIntl()
	const { data, loading } = useGetAllCompanies()

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

	const companies = companySearch
		? data.company.filter((c) =>
				c.name.toLowerCase().includes(companySearch.toLowerCase()),
		  )
		: data.company

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
