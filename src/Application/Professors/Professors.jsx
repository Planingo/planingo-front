import React from 'react'
import './professors.scss'
import Professor from './Professor/Professor'
import AddProfessor from './Professor/Add/AddProfessor'
import { useGetAllProfessors } from './professors.hooks'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'

const Professors = () => {
	const intl = useIntl()
	const { data, loading } = useGetAllProfessors()

	if (loading) return <div>Loading....</div>

	if (!data)
		return (
			<NoData
				cta={intl.formatMessage({ id: 'add.professor' })}
				description={intl.formatMessage({ id: 'no.data.professor' })}
			/>
		)
	return (
		<div className="professors">
			<Gallery
				datas={data?.professor}
				loading={loading}
				Item={Professor}
				Add={AddProfessor}
				title={intl.formatMessage({ id: 'add.professor' })}
			/>
		</div>
	)
}

export default Professors
