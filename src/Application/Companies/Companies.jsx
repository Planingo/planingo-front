import React from 'react'
import './companies.scss'
import Company from './Company/Company'
import { useGetAllCompagnies } from './companies.hooks'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'

const Compagnies = () => {
	const intl = useIntl()
	const { data, loading } = useGetAllCompagnies()

	if (loading) return <div>Loading....</div>

	if (!data)
		return (
			<NoData
				cta={intl.formatMessage({ id: 'add.company' })}
				description={intl.formatMessage({ id: 'no.data.company' })}
			/>
		)
	return (
		<div className="compagnies">
			<Gallery datas={data?.company} loading={loading} Item={Company} />
		</div>
	)
}

export default Compagnies
