import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'
import AccountReducer from '../../Account/store'

const composeEnhancers =
	typeof window === 'object' &&
	process.env.NODE_ENV === 'development' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose

export default function configureStore() {
	const rootReducer = combineReducers({ account: AccountReducer })

	const persistConfig = {
		key: 'planingo',
		storage,
		whitelist: ['account'],
	}

	const persistedReducer = persistReducer(persistConfig, rootReducer)
	const store = createStore(
		persistedReducer,
		composeEnhancers(applyMiddleware(thunkMiddleware)),
	)
	const persistor = persistStore(store)

	return { store, persistor }
}
