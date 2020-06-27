import React from 'react'
import './cours.scss'
import Cour from './Cour/Cour'
import AddCour from './Cour/Add/AddCour'
import { useGetAllStudents } from './cours.hooks'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'

const Cours = () => {
	const intl = useIntl()
	const { data, loading } = useGetAllStudents()

	if (loading) return <div>Loading....</div>

	if (!data)
		return (
			<NoData
				cta={intl.formatMessage({ id: 'add.cours' })}
				description={intl.formatMessage({ id: 'no.data.cours' })}
			/>
		)
	return (
		<div className="cours">
			<Gallery
				datas={data?.cour}
				loading={loading}
				Item={Cour}
				Add={AddCour}
				title={intl.formatMessage({ id: 'add.cours' })}
			/>
		</div>
	)
}

export default Cours
