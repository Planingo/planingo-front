import { useEffect } from 'react'
import { useFindAccountByEmail } from '../../Tools/MagicBook/Account/account.hooks'
import { useHistory } from 'react-router-dom'
import { actions } from '../store'
import { useDispatch } from 'react-redux'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

export const useLogin = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [findAccountByEmail, { data, loading }] = useFindAccountByEmail()

	useEffect(() => {
		const p = async accountId => {
			dispatch(actions.login(accountId))
			history.push(`/`)
		}
		if (data && data.account[0] && data.account[0].id) {
			p(data.account[0].id)
		}
	}, [data, history, dispatch])

	return [
		async values => {
			await findAccountByEmail(values)
		},
		loading,
	]
}

export const useUpdateSettingsById = () => {
	return useMutation(
		gql`
			mutation updateSettingsById(
				$id: uuid!
				$company: Boolean!
				$lesson: Boolean!
				$module: Boolean!
				$pathway: Boolean!
				$professor: Boolean!
				$room: Boolean!
				$student: Boolean!
			) {
				update_setting_by_pk(
					pk_columns: { id: $id }
					_set: {
						company: $company
						lesson: $lesson
						module: $module
						pathway: $pathway
						professor: $professor
						room: $room
						student: $student
					}
				) {
					company
					lesson
					id
					module
					pathway
					professor
					room
					student
				}
			}
		`,
	)
}
