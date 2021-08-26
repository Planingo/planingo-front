import React from 'react'
import Calendars from '../../../Layout/Detail/Calendars/calendars'
import { Detail } from '../../../Layout/Detail/Detail'
import { Constraints } from './Constraints/Constraints'

export const DetailProfessor = () => {
	return (
		<Detail Constraints={<Constraints/>} Calendars={<Calendars/>} />
	)
}
