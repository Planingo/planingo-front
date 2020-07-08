import { REHYDRATE } from 'redux-persist'

const initialState = null

const AccountReducer = (state = initialState, action) => {
	switch (action.type) {
		case REHYDRATE:
			return action?.payload === undefined ? null : action?.payload?.account
		case 'LOGIN':
			return { ...state, id: action.id }
		case 'SETTINGS':
			return { ...state, settings: action.settings }
		case 'UPDATE_SETTINGS':
			return { ...state, settings: action.settings }
		default:
			return state
	}
}

export default AccountReducer
