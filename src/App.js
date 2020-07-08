import React from 'react'
import './App.scss'
import IntlProvider from './Tools/translation/IntlProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import './App.less'
import Account from './Account/Account'
import Application from './Application/Application'
import configureStore from './Tools/store/store'
import { ApolloProvider } from '@apollo/react-hooks'
import { hogwarts } from './Tools/Clients/graphql'

const App = () => {
	const { store, persistor } = configureStore()
	return (
		<ReduxProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<IntlProvider>
					<ApolloProvider client={hogwarts}>
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
					</ApolloProvider>
				</IntlProvider>
			</PersistGate>
		</ReduxProvider>
	)
}

export default App
