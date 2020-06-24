import { useMutation, useLazyQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const useCreateAccount = () => {
	const [createAccount] = useMutation(gql`
		mutation createAccount($email: String!, $password: String!) {
			insert_account_one(object: { email: $email, password: $password }) {
				id
			}
		}
	`)
	return values =>
		createAccount({
			variables: { email: values.email, password: values.password },
		})
}

export const useFindAccountByEmail = () => {
	const [findAccountByEmail, result] = useLazyQuery(gql`
		query findAccountByEmail($email: String!, $password: String!) {
			account(where: { email: { _eq: $email }, password: { _eq: $password } }) {
				id
			}
		}
	`)
	return [
		values =>
			findAccountByEmail({
				variables: { email: values.email, password: values.password },
			}),
		result,
	]
}
