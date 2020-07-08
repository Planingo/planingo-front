import React from 'react'
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
import { HomeOutlined } from '@ant-design/icons'
import { selectors } from '../Account/store'
import { useSelector } from 'react-redux'

const Application = () => {
	const intl = useIntl()
	const location = useLocation()
	const menu = (
		<Menu>
			<Menu.Item>
				<a href="/auth/login">{intl.formatMessage({ id: 'logout' })}</a>
			</Menu.Item>
		</Menu>
	)

	return (
		<div className="application">
			<Navigation />
			<div className="header">
				<Breadcrumb>
					<Breadcrumb.Item href="/">
						<HomeOutlined />
					</Breadcrumb.Item>
					{location.pathname
						.split('/')
						.filter(path => path.length)
						.map(path => {
							return (
								<Breadcrumb.Item href={path} key={path}>
									{intl.formatMessage({ id: `navigation.${path}` })}
								</Breadcrumb.Item>
							)
						})}
				</Breadcrumb>

				<Dropdown overlay={menu} placement="bottomRight">
					{/* <Button> */}
					<Avatar
						size="large"
						shape="square"
						src={`https://api.adorable.io/avatars/285/${useSelector(
							selectors.accountId,
						)}.png`}
					/>
					{/* </Button> */}
				</Dropdown>
			</div>
			<div className="body">
				<div className="middle">
					<Switch>
						<Route path="/students">
							<Students />
						</Route>
						<Route path="/professors">
							<Professors />
						</Route>
						<Route path="/calendars">
							<Calendars />
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
