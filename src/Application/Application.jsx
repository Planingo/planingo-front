import React from 'react'
import { Route, Switch, useLocation, Link } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import Students from './Students/Students'
import './application.scss'
import Navigation from './Navigation/Navigation'
import Professors from './Professors/Professors'
import Calendars from './Calendars/Calendars'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useIntl } from 'react-intl'
import Pathways from './Pathways/Pathways'
import Modules from './Modules/Modules'
import Settings from './Settings/Settings'
import Cours from './Cours/Cours'
import Rooms from './Rooms/Rooms'
import Compagnies from './Compagnies/Compagnies'

const client = new ApolloClient({
	uri: 'https://hogwarts-school.caprover.cocaud.dev/v1/graphql',
	headers: {
		'x-hasura-admin-secret': process.env.REACT_APP_HOGWARTS_ADMIN_SECRET,
	},
})

const Application = () => {
	const intl = useIntl()
	const location = useLocation()
	return (
		<div className="application">
			<ApolloProvider client={client}>
				<Navigation />
				<div className="header">
					{location.pathname
						.split('/')
						.filter(path => path.length)
						.map(path => {
							return (
								<Link to={path} key={path}>
									{intl.formatMessage({ id: `navigation.${path}` })} /
								</Link>
							)
						})}
					<Avatar icon={<UserOutlined />} />
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
							<Route path="/cours">
								<Cours />
							</Route>
							<Route path="/rooms">
								<Rooms />
							</Route>
							<Route path="/compagnies">
								<Compagnies />
							</Route>
							<Route path="/settings">
								<Settings />
							</Route>
						</Switch>
					</div>
				</div>
			</ApolloProvider>
		</div>
	)
}

export default Application
