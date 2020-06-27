import React from 'react'
import './calendar.scss'
import { Calendar as CalendarAntd } from 'antd'
import moment from 'moment'
import 'moment/locale/fr'
moment.locale('fr')

const Calendar = () => {
	return (
		<div className="calendar">
			<CalendarAntd locale={moment.locale('fr')} />
		</div>
	)
}

export default Calendar
