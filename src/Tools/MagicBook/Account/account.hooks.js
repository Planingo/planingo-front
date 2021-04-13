import { useSignup, useCreateSettings } from './account'
import * as actions from '../../../Account/store/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { gql, useQuery } from '@apollo/client'
import { useCreateLessonConstraintsSetting } from '../../../Application/Settings/Constraints/Hook/lessonConstraints.hook'
import { useCreateModuleConstraintsSetting } from '../../../Application/Settings/Constraints/Hook/moduleConstraints.hook'
import { useCreateStudentConstraintsSetting } from '../../../Application/Settings/Constraints/Hook/studentConstraints.hook'
import { useCreateProfessorConstraintsSetting } from '../../../Application/Settings/Constraints/Hook/professorConstraints.hook'
import { useCreateRoomConstraintsSetting } from '../../../Application/Settings/Constraints/Hook/roomConstraints.hook'
import { useCreatePathwayConstraintsSetting } from '../../../Application/Settings/Constraints/Hook/pathwayConstraints.hook'
import { useCreateCompanyConstraintsSetting } from '../../../Application/Settings/Constraints/Hook/companyConstraints.hook'

export const useCreateAccount = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const createAccount = useSignup()
	const createSettings = useCreateSetting()
	const createStudentConstraintsSetting = useCreateStudentConstraintsSetting()
	const createProfessorConstraintsSetting = useCreateProfessorConstraintsSetting()
	const createLessonConstraintsSetting = useCreateLessonConstraintsSetting()
	const createModuleConstraintsSetting = useCreateModuleConstraintsSetting()
	const createRoomConstraintsSetting = useCreateRoomConstraintsSetting()
	const createPathwayConstraintsSetting = useCreatePathwayConstraintsSetting()
	const createCompanyConstraintsSetting = useCreateCompanyConstraintsSetting()

	return async values => {
		const account = await createAccount(values)
		dispatch(actions.accountCreated(account))
		await createSettings(account.id)
		await createStudentConstraintsSetting(account.id)
		await createProfessorConstraintsSetting(account.id)
		await createLessonConstraintsSetting(account.id)
		await createModuleConstraintsSetting(account.id)
		await createRoomConstraintsSetting(account.id)
		await createPathwayConstraintsSetting(account.id)
		await createCompanyConstraintsSetting(account.id)
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

export const useAccountById = (id) => {
	const { loading, data } = useQuery(
		gql`
			query getUserById($id: uuid!) {
				account_by_pk(id: $id) {
					email
					id
				}
			}
		`,
		{ variables: { id: id } },
	)
	return { loadingAccount: loading, email: data?.account_by_pk.email }
}
