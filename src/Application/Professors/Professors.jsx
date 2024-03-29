import React from 'react'
import './professors.scss'
import Professor from './Professor/Professor'
import AddProfessor from './Professor/Add/AddProfessor'
import Gallery from '../Layout/Gallery'
import NoData from '../../Extra/NoData'
import { useIntl } from 'react-intl'
import { Spin } from '@planingo/ditto'

const Professors = ({ professors, loading }) => {
	const intl = useIntl()

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	if (professors.length === 0)
		return (
			<NoData
				Add={AddProfessor}
				cta={intl.formatMessage({ id: 'add.professor' })}
				description={intl.formatMessage({ id: 'no.data.professor' })}
				title={intl.formatMessage({ id: 'add.professor' })}
			/>
		)

	return (
		<div className="professors">
			<Gallery
				datas={professors}
				loading={loading}
				Item={Professor}
				Add={AddProfessor}
				title={intl.formatMessage({ id: 'add.professor' })}
			/>
		</div>
	)
}

export default Professors
