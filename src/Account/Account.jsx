import React from 'react'
import Login from './Login/login'
import { ReactComponent as Wave } from './media/wavesNegative.svg'
import { Route, useRouteMatch, Switch } from 'react-router-dom'
import Signup from './Signup/signup'
import Reset from './Reset/reset'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import './account.scss'

const client = new ApolloClient({
	uri: 'https://planingauth.caprover.cocaud.dev/v1/graphql',
	headers: { 'x-hasura-admin-secret': process.env.REACT_APP_AUTH_ADMIN_SECRET },
})

const Account = () => {
	let match = useRouteMatch()
	return (
		<ApolloProvider client={client}>
			<div className="container">
				<div className="left">
					<Switch>
						<Route exact={true} path={`${match.url}/login`}>
							<Login />
						</Route>
						<Route exact={true} path={`${match.url}/signup`}>
							<Signup />
						</Route>
						<Route exact={true} path={`${match.url}/reset`}>
							<Reset />
						</Route>
					</Switch>
				</div>
				<div className="right">
					<Wave />
				</div>
			</div>
		</ApolloProvider>
	)
}

export default Account
