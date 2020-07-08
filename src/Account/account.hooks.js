import {
	useSignup,
	useAccountIdByEmail,
	useCreateSettings,
} from '../Tools/MagicBook/account'

export const useCreateAccount = () => {
	const [createAccount] = useSignup()

	const createSettings = useCreateSetting()

	return async values => {
		const { data } = await createAccount({
			variables: { email: values.email, password: values.password },
		})
		await createSettings(data.insert_account_one.id)

		return data.insert_account_one.id
	}
}

export const useCreateSetting = () => {
	const [createSettings] = useCreateSettings()
	return accountId =>
		createSettings({
			variables: {
				company: true,
				accountId: accountId,
				lesson: true,
				module: true,
				pathway: true,
				professor: true,
				room: true,
				student: true,
			},
		})
}

export const useFindAccountByEmail = () => {
	const [findAccountIdByEmail, result] = useAccountIdByEmail()
	return [
		values =>
			findAccountIdByEmail({
				variables: { email: values.email, password: values.password },
			}),
		result,
	]
}
