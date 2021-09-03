import React from 'react'
import { useIntl } from 'react-intl'
import Refinement from '../../../../Components/Refinement/refinement'
import Calendars from '../../../Layout/Detail/Calendars/calendars'
import { Detail } from '../../../Layout/Detail/Detail'
import { useEditConstraints } from '../../../Settings/Constraints/Hook/companyConstraints.hook'
import { useEdit, useGetCompanyById } from '../../companies.hooks'
import { Constraints } from './Constraints'
import EditConstraint from '../Edit/EditConstraint'
import Edit from '../Edit/Edit'
import {
	WifiOutlined,
	EditOutlined,
} from '@ant-design/icons'
import { useParams } from 'react-router'
import { Footer } from '../../../Layout/Footer/Footer'

const DetailCompany = () => {
	const intl = useIntl()
	const [edit, { loading: editingCompany }] = useEdit()
    const [editConstraints, {loading: editingCompanyConstraints}] = useEditConstraints()

	const {id} = useParams()
	const {loading, company} = useGetCompanyById(id)

	if (loading) return null

	return (
		<>
			<Refinement
				backTo="companies"
				FirstActionIcon={WifiOutlined}
				firstActionText={intl.formatMessage({ id: 'edit.company' })}
				FirstForm={Edit}
				onFirstAction={edit}
				firstActioning={editingCompany}
				SecondActionIcon={EditOutlined}
				secondActionText={intl.formatMessage({
					id: 'edit.constraints',
				})}
				SecondForm={EditConstraint}
				onSecondAction={editConstraints}
				secondActioning={editingCompanyConstraints}
				mainActionButton={intl.formatMessage({ id: 'edit' })}
				Info={
					<h1>{company.name}</h1>
				}
			/>
			<Detail Constraints={<Constraints/>} Calendars={<Calendars/>} />
			<Footer />
		</>
	)
}

export default DetailCompany
