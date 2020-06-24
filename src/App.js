import React from 'react'
import './App.scss'
import IntlProvider from './Tools/translation/IntlProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.less'
import Account from './Account/Account'
import Application from './Application/Application'

const App = () => {
	return (
		<IntlProvider>
			<Router>
				<Switch>
					<Route basename="/auth" path="/auth">
						<Account />
					</Route>
					<Route path="/">
						<Application />
					</Route>
				</Switch>
			</Router>
		</IntlProvider>
	)
}

export default App
