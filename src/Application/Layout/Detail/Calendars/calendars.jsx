import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import './calendars.scss'

const Calendars = () => {
	return <FullCalendar
		height='78vh'
		plugins={[ dayGridPlugin, listPlugin, timeGridPlugin, interactionPlugin ]}
		initialView="dayGridMonth"
		locale={frLocale}
		weekends={false}
		weekNumbers={true}
		headerToolbar={{
			left: "prev,next today",
			center: "title",
			right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
		}}
		events={[
			{ 
				title: 'event 1', 
				start: '2021-04-05',
				end: '2021-04-10',
				allDay: true
			},
			{ 
				title: 'event 2', 
				start: '2021-04-12',
				end: '2021-04-21',
				allDay: true,
				backgroundColor: 'orange',
				borderColor: 'orange'
			}
		]}
	/>
}

export default Calendars
