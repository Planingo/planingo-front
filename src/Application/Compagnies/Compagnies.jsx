import React from 'react'
import './compagnies.scss'
import Compagny from './Compagny/Compagny'
import { useGetAllCompagnies } from './compagnies.hooks'
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
				cta={intl.formatMessage({ id: 'add.compagny' })}
				description={intl.formatMessage({ id: 'no.data.compagny' })}
			/>
		)
	return (
		<div className="compagnies">
			<Gallery datas={data?.compagny} loading={loading} Item={Compagny} />
		</div>
	)
}

export default Compagnies
