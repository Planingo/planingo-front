import React, { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Students from './Students/Students'
import './application.scss'
import Navigation from './Navigation/Navigation'
import Professors from './Professors/Professors'
import Calendars from './Calendars/Calendars'
import { useIntl } from 'react-intl'
import Pathways from './Pathways/Pathways'
import Modules from './Modules/Modules'
import Settings from './Settings/Settings'
import Lessons from './Lessons/Lessons'
import Rooms from './Rooms/Rooms'
import Companies from './Companies/Companies'
import { Breadcrumb, Dropdown, Avatar, Menu, Radio } from 'antd'
import {
	HomeOutlined,
	AppstoreOutlined,
	UnorderedListOutlined,
	UserOutlined,
	CalendarOutlined,
} from '@ant-design/icons'
import { selectors } from '../Account/store'
import { useSelector } from 'react-redux'
import DetailPathway from './Pathways/Pathway/Detail/DetailPathway'
import DetailStudent from './Students/Student/Detail/DetailStudent'
import DetailProfessor from './Professors/Professor/Detail/DetailProfessor'
import DetailModule from './Modules/Module/Detail/DetailModule'
import DetailLesson from './Lessons/Lesson/Detail/DetailLesson'
import DetailRoom from './Rooms/Room/Detail/DetailRoom'
import DetailCompany from './Companies/Company/Detail/DetailCompany'
import StudentsList from './Students/StudentsList'
import Search from 'antd/lib/input/Search'
import AddItem from './Layout/Add/AddItem'
import AddStudent from './Students/Student/Add/AddStudent'

const Application = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)

	return (
		<div className="application">
			<Navigation />
			<div className="body">
				<div className="middle">
					<Switch>
						<Route path="/students/:id">
							<DetailStudent />
						</Route>
						<Route path="/professors/:id">
							<DetailProfessor />
						</Route>
						<Route path="/calendars/:id">
							<DetailPathway />
						</Route>
						<Route path="/pathways/:id">
							<DetailPathway />
						</Route>
						<Route path="/modules/:id">
							<DetailModule />
						</Route>
						<Route path="/lessons/:id">
							<DetailLesson />
						</Route>
						<Route path="/rooms/:id">
							<DetailRoom />
						</Route>
						<Route path="/companies/:id">
							<DetailCompany />
						</Route>

						{isGrid ? (
							<>
								<div className="search">
									<Search placeholder="Rechercher un étudiant" />
								</div>

								<div className="refinement">
									<Radio.Group
										options={options}
										onChange={() => setIsGrid(!isGrid)}
										value={isGrid ? 'Grille' : 'List'}
										optionType="button"
										buttonStyle="solid"
									/>
									<div className="refinement-item">
										<AddItem
											title={
												<div>
													<UserOutlined />
													<p>{intl.formatMessage({ id: 'add.student' })}</p>
												</div>
											}
										>
											<AddStudent />
										</AddItem>
										<AddItem
											title={
												<div>
													<CalendarOutlined />
													<p>{intl.formatMessage({ id: 'add.calendar' })}</p>
												</div>
											}
										>
											<AddStudent />
										</AddItem>
									</div>
								</div>
								<Route path="/students">
									<Students
										setIsGrid={setIsGrid}
										isGrid={isGrid}
										options={options}
									/>
								</Route>
							</>
						) : (
							<>
								<div className="search">
									<Search placeholder="Rechercher un étudiant" />
								</div>

								<div className="refinement">
									<Radio.Group
										options={options}
										onChange={() => setIsGrid(!isGrid)}
										value={isGrid ? 'Grille' : 'List'}
										optionType="button"
										buttonStyle="solid"
									/>
									<div className="refinement-item">
										<AddItem
											title={
												<div>
													<UserOutlined />
													<p>{intl.formatMessage({ id: 'add.student' })}</p>
												</div>
											}
										>
											<AddStudent />
										</AddItem>
										<AddItem
											title={
												<div>
													<CalendarOutlined />
													<p>{intl.formatMessage({ id: 'add.calendar' })}</p>
												</div>
											}
										>
											<AddStudent />
										</AddItem>
									</div>
								</div>
								<Route path="/students">
									<StudentsList
										setIsGrid={setIsGrid}
										isGrid={isGrid}
										options={options}
									/>
								</Route>
							</>
						)}
						<Route path="/professors">
							<Professors />
						</Route>
						<Route path="/pathways">
							<Pathways />
						</Route>
						<Route path="/modules">
							<Modules />
						</Route>
						<Route path="/lessons">
							<Lessons />
						</Route>
						<Route path="/rooms">
							<Rooms />
						</Route>
						<Route path="/companies">
							<Companies />
						</Route>
						<Route path="/calendars">
							<Calendars />
						</Route>
						<Route path="/settings">
							<Settings />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default Application
