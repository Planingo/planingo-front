import { gql } from '@apollo/client'
import { hogwarts } from '../../Tools/Clients/graphql'

export const login = ({ email, password }) => async (dispatch) => {
	const { data, errors } = await hogwarts.query({
		query: gql`
			query($email: String!, $password: String!) {
				login(email: $email, password: $password) {
					token, accountId
				}
			}
		`,
		fetchPolicy: 'no-cache',
		variables: {
			email, password
		}
	})

	// FIXME: Display errors to the user (with a toast ?)
	if (errors?.length) console.error("Login failed:", errors)

	if (data?.login) {
		const { accountId, token } = data.login
		localStorage.setItem('token', token)
		dispatch({ id: accountId, type: 'LOGIN' })
		return accountId
	}
}

export const accountCreated = ({ id, token }) => (dispatch) => {
	localStorage.setItem('token', token)
	dispatch({ type: 'LOGIN', id})
}

export default {
	login,
}
