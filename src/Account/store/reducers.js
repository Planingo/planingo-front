import { REHYDRATE } from 'redux-persist'

const initialState = null

const AccountReducer = (state = initialState, action) => {
	switch (action.type) {
		case REHYDRATE:
			return action?.payload === undefined ? null : action?.payload?.account
		case 'LOGIN':
			return { ...state, id: action.id }
		default:
			return state
	}
}

export default AccountReducer
