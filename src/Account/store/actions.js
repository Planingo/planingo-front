export const login = id => ({
	id,
	type: 'LOGIN',
})

export const settings = settings => ({
	settings,
	type: 'SETTINGS',
})

export const updateSettings = settings => ({
	settings,
	type: 'UPDATE_SETTINGS',
})

export default {
	login,
	settings,
	updateSettings,
}
