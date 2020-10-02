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
import { Breadcrumb, Dropdown, Avatar, Menu } from 'antd'
import {
	HomeOutlined,
	AppstoreOutlined,
	UnorderedListOutlined,
} from '@ant-design/icons'
import { selectors } from '../Account/store'
import { useSelector } from 'react-redux'
import DetailPathway from './Pathways/Pathway/Detail/DetailPathway'
import { Link } from 'react-router-dom'
import DetailStudent from './Students/Student/Detail/DetailStudent'
import DetailProfessor from './Professors/Professor/Detail/DetailProfessor'
import DetailModule from './Modules/Module/Detail/DetailModule'
import DetailLesson from './Lessons/Lesson/Detail/DetailLesson'
import DetailRoom from './Rooms/Room/Detail/DetailRoom'
import DetailCompany from './Companies/Company/Detail/DetailCompany'
import RoomsList from './Rooms/RoomsList'
import StudentsList from './Students/StudentsList'

const Application = () => {
	const intl = useIntl()
	const location = useLocation()

	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [isGrid, setIsGrid] = useState(true)

	const menu = (
		<Menu>
			<Menu.Item>
				<a href="/auth/login">{intl.formatMessage({ id: 'logout' })}</a>
			</Menu.Item>
		</Menu>
	)

	const locations = location.pathname.split('/').slice(1)

	return (
		<div className="application">
			<Navigation />
			<div className="header">
				<Breadcrumb>
					<Breadcrumb.Item href="/">
						<HomeOutlined />
					</Breadcrumb.Item>
					{locations.map((path, index) => {
						const link = locations.slice(0, index + 1).join('/')
						return (
							<Breadcrumb.Item key={link}>
								<Link to={`/${link}`} onClick={e => e.stopPropagation()}>
									{intl.messages[`navigation.${path}`] ?? path}
								</Link>
							</Breadcrumb.Item>
						)
					})}
				</Breadcrumb>

				<Dropdown overlay={menu} placement="bottomRight">
					<Avatar
						size="large"
						shape="square"
						src={`https://api.adorable.io/avatars/285/${useSelector(
							selectors.accountId,
						)}.png`}
					/>
				</Dropdown>
			</div>
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
								<Route path="/students">
									<Students
										setIsGrid={setIsGrid}
										isGrid={isGrid}
										options={options}
									/>
								</Route>
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
							</>
						) : (
							<>
								<Route path="/students">
									<StudentsList
										setIsGrid={setIsGrid}
										isGrid={isGrid}
										options={options}
									/>
								</Route>
								<Route path="/rooms">
									<RoomsList />
								</Route>
							</>
						)}
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
