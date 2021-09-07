import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './application.scss'
import Navigation from './Navigation/Navigation'
import {Student, Professor, Calendar, Lesson, Room, Company} from './Routes'
import { Pathway } from './Routes/Pathway'
import { Module } from './Routes/Module'
// import Settings from './Settings/Settings'

const Application = () => {

	return (
		<div className="application">
			<Navigation />
			<div className="body">
				<div className="middle">
					<Switch>
						<Route path="/students">
							<Student/>
						</Route>
						<Route path="/professors">
							<Professor/>
						</Route>
						<Route path="/calendars">
							<Calendar/>
						</Route>
						<Route path="/pathways">
							<Pathway/>
						</Route>
						<Route path="/modules">
							<Module/>
						</Route>
						<Route path="/lessons">
							<Lesson/>
						</Route>
						<Route path="/rooms">
							<Room/>
						</Route>
						<Route path="/companies">
							<Company/>
						</Route>
						{/* <Route path="/settings">
							<Settings />
						</Route> */}
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default Application
