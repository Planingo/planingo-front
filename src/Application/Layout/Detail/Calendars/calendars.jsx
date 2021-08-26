import React from 'react'
import { Calendar as CalendarAntd } from 'antd'
import moment from 'moment'
import 'moment/locale/fr'
moment.locale('fr')

const Calendars = () => {
	return <CalendarAntd locale={moment.locale('fr')} />
}

export default Calendars
