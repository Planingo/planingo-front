import { useSignup, useCreateSettings } from './account'
import * as actions from '../../../Account/store/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

export const useCreateAccount = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const createAccount = useSignup()
	const createSettings = useCreateSetting()

	return async values => {
		const account = await createAccount(values)
		dispatch(actions.accountCreated(account))
		await createSettings(account.id)
		history.push('/')
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
