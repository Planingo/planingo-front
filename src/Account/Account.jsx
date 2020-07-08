import React from 'react'
import Login from './Login/login'
import { ReactComponent as Wave } from './media/wavesNegative.svg'
import { Route, useRouteMatch, Switch } from 'react-router-dom'
import Signup from './Signup/signup'
import Reset from './Reset/reset'
import './account.scss'

const Account = () => {
	let match = useRouteMatch()
	return (
		<div className="container">
			<div className="left">
				<Switch>
					<Route path={`${match.url}/login`}>
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
	)
}

export default Account
