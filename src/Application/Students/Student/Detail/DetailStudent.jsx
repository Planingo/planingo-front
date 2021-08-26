import React from 'react'
import Calendars from '../../../Layout/Detail/Calendars/calendars'
import { Detail } from '../../../Layout/Detail/Detail'
import { Constraints } from './Constraints/Constraints'

const DetailStudent = () => {
	return (
		<Detail Constraints={<Constraints/>} Calendars={<Calendars/>} />
	)
}

export default DetailStudent
