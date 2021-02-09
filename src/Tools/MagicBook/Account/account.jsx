import { useMutation } from '@apollo/client'
import { gql } from '@apollo/client'

export const useSignup = () => {
	const [doCreate] = useMutation(gql`
		mutation createAccount($email: String!, $password: String!) {
			account: createAccount(email: $email, password: $password) {
				id: accountId
				token
			}
		}
	`)
	return async ({ email, password }) => {
		const { data } = await doCreate({ variables: { email, password } })
		if (data?.account) return data.account
	}
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
