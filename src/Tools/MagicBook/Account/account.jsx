import { useMutation, useLazyQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const useSignup = () => {
	return useMutation(gql`
		mutation createAccount($email: String!, $password: String!) {
			insert_account_one(object: { email: $email, password: $password }) {
				id
			}
		}
	`)
}

export const useCreateSettings = () => {
	return useMutation(gql`
		mutation createSettings(
			$company: Boolean!
			$accountId: uuid!
			$lesson: Boolean!
			$module: Boolean!
			$pathway: Boolean!
			$professor: Boolean!
			$room: Boolean!
			$student: Boolean!
		) {
			insert_setting_one(
				object: {
					company: $company
					accountId: $accountId
					lesson: $lesson
					module: $module
					pathway: $pathway
					professor: $professor
					room: $room
					student: $student
				}
			) {
				id
			}
		}
	`)
}

export const useAccountIdByEmail = () => {
	return useLazyQuery(gql`
		query findAccountIdByEmail($email: String!, $password: String!) {
			account(where: { email: { _eq: $email }, password: { _eq: $password } }) {
				id
			}
		}
	`)
}
