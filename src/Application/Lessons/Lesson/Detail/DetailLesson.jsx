import React from 'react'
import { Constraints } from './Constraints'
import { Detail } from '../../../Layout/Detail/Detail'
import Calendars from '../../../Layout/Detail/Calendars/calendars'

const DetailLesson = () => {
	return (
		<Detail Constraints={<Constraints/>} Calendars={<Calendars/>} />
	)
}

export default DetailLesson
