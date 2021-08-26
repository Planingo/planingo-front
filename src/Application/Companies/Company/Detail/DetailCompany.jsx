import React from 'react'
import Calendars from '../../../Layout/Detail/Calendars/calendars'
import { Detail } from '../../../Layout/Detail/Detail'
import { Constraints } from './Constraints'

const DetailCompany = () => {
	return (
		<Detail Constraints={<Constraints/>} Calendars={<Calendars/>} />
	)
}

export default DetailCompany
