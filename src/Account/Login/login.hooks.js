import { useEffect, useCallback } from 'react'
import { useFindAccountByEmail } from '../account.hooks'
import { useHistory } from 'react-router-dom'
import { actions } from '../store'
import { useDispatch } from 'react-redux'
import { gql } from 'apollo-boost'
import { hogwarts } from '../../Tools/Clients/graphql'

export const useLogin = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [findAccountByEmail, { data, loading }] = useFindAccountByEmail()
	const findSettingsByAccountIdCallback = useFindSettingsByAccountId()

	useEffect(() => {
		const p = async accountId => {
			await findSettingsByAccountIdCallback(accountId)
			dispatch(actions.login(accountId))
			history.push(`/`)
		}
		console.log(data)
		if (data && data.account[0] && data.account[0].id) {
			p(data.account[0].id)
		}
	}, [data, history, dispatch, findSettingsByAccountIdCallback])

	return [
		async values => {
			await findAccountByEmail(values)
		},
		loading,
	]
}

export const useFindSettingsByAccountId = () => {
	const dispatch = useDispatch()
	const findSettingsByAccountIdCallback = useCallback(
		async accountId => {
			const { data } = await hogwarts.query({
				variables: { accountId: accountId },
				query: gql`
					query findSettingsByAccountId($accountId: uuid!) {
						setting(where: { accountId: { _eq: $accountId } }) {
							company
							lesson
							module
							pathway
							professor
							room
							student
							id
						}
					}
				`,
			})
			dispatch(actions.settings(data.setting[0]))
		},
		[dispatch],
	)

	return findSettingsByAccountIdCallback
}

export const useUpdateSettingsById = () => {
	const dispatch = useDispatch()
	const updateSettingsById = useCallback(
		async (id, company, lesson, m, pathway, professor, room, student) => {
			const { data } = await hogwarts.mutate({
				variables: {
					id: id,
					company: company,
					lesson: lesson,
					module: m,
					pathway: pathway,
					professor: professor,
					room: room,
					student: student,
				},
				mutation: gql`
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
			})
			dispatch(actions.updateSettings(data.update_setting_by_pk))
		},
		[dispatch],
	)
	return updateSettingsById
}
