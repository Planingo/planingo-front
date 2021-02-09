import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { actions } from '../store'
import { useDispatch } from 'react-redux'
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client'

export const useLogin = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)

	return [
		async (values) => {
			setLoading(true)
			const id = await dispatch(actions.login(values))
			if (id) history.push('/')
			setLoading(false)
		},
		loading
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
