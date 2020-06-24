import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import Students from './Students/Students'
import './application.scss'
import Navigation from './Navigation/Navigation'
import Professors from './Professors/Professors'

const client = new ApolloClient({
	uri: 'https://hogwarts-school.caprover.cocaud.dev/v1/graphql',
	headers: {
		'x-hasura-admin-secret': process.env.REACT_APP_HOGWARTS_ADMIN_SECRET,
	},
})

const Application = () => {
	return (
		<div className="application">
			<ApolloProvider client={client}>
				<Navigation />
				<div className="body">
					<Switch>
						<Route path={`/students`}>
							<Students />
						</Route>
						<Route path={`/professors`}>
							<Professors />
						</Route>
					</Switch>
				</div>
			</ApolloProvider>
		</div>
	)
}

export default Application
