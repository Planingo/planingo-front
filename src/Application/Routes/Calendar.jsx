import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Calendars from '../Calendars/Calendars'
import '../application.scss'
import { useIntl } from 'react-intl'
import {
	AppstoreOutlined,
	UnorderedListOutlined,
	EditOutlined,
    UserOutlined
} from '@ant-design/icons'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddCalendar from '../Calendars/Calendar/Add/AddCalendar'
import { useAddCalendar } from '../Calendars/Calendar/calendar.hooks'

export const Calendar = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addCalendar, { loading: addingCalendar }] = useAddCalendar()
	// const [editCalendar, { loading: editingCalendar }] = useEditCalendar()

	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)

	const onCalendarSearch = (value) => {
		setCalendarSearch(value)
	}

	const [calendarSearch, setCalendarSearch] = useState()
	
	return (
		<div>
            <Switch>
                <Route path="/calendars/:id">
                    <Refinement
                        backTo="calendars"
                        FirstActionIcon={UserOutlined}
                        firstActionText={intl.formatMessage({ id: 'edit.calendar' })}
                        FirstForm={AddCalendar}
                        onFirstAction={addCalendar}
                        firstActioning={addingCalendar}
                        SecondActionIcon={EditOutlined}
                        secondActionText={intl.formatMessage({
                            id: 'edit.constraints',
                        })}
                        SecondForm={AddCalendar}
                        onSecondAction={addCalendar}
                        secondActioning={addingCalendar}
                        mainActionButton={intl.formatMessage({ id: 'edit' })}
                    />
                    <p>Coucou</p>
                </Route>
                <Route path="/calendars/">
                    <div className="header">
                        <Search
                            placeholder="Rechercher un calendrier"
                            onSearch={onCalendarSearch}
                        />
                        <Refinement
                            options={options}
                            setIsGrid={setIsGrid}
                            isGrid={isGrid}
                        />
                    </div>
                        <Calendars calendarSearch={calendarSearch} />
                </Route>
            </Switch>
		</div>
	)
}
