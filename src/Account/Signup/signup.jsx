import React from 'react'
import { useIntl } from 'react-intl'
import { Input, Form, Button } from 'antd'
import './signup.scss'
// import { useDispatch } from 'react-redux'
import { Form as FinalForm, Field } from 'react-final-form'
import { useHistory, Link } from 'react-router-dom'
import { useCreateAccount } from '../../Tools/MagicBook/Account/account.hooks'
// import { actions } from '../store'

const Signup = () => {
	const intl = useIntl()
	const history = useHistory()
	// const dispatch = useDispatch()
	const requiredEmail = value =>
		value ? undefined : intl.formatMessage({ id: 'error.required' })

	const requiredPassword = value => {
		if (!value) return intl.formatMessage({ id: 'error.required' })

		if (value.length < 9)
			return intl.formatMessage({ id: 'error.password.character' })

		return undefined
	}

	const requiredPasswordConfirm = value => {
		if (!value) return intl.formatMessage({ id: 'error.required' })

		if (value.length < 9)
			return intl.formatMessage({ id: 'error.password.character' })

		return undefined
	}
	const createAccount = useCreateAccount()

	const onSubmit = async values => {
		const id = await createAccount(values)
		// await dispatch(actions.createAnAccount({ values.email, id }))
		history.push(`/auth/login/${id}`)
	}

	return (
		<div className="signup">
			<h1>{intl.formatMessage({ id: 'form.signup' })}</h1>
			<FinalForm
				onSubmit={onSubmit}
				render={({ handleSubmit, valid }) => (
					<Form onFinish={handleSubmit} layout="vertical">
						<Field name="email" validate={requiredEmail}>
							{({ input, meta }) => (
								<Form.Item
									label={intl.formatMessage({ id: 'form.signup.username' })}
									validateStatus={
										meta.touched && meta.error ? 'error' : undefined
									}
									help={meta.touched && meta.error}
								>
									<Input
										{...input}
										type="email"
										placeholder={intl.formatMessage({
											id: 'form.signup.username.placeholder',
										})}
									/>
								</Form.Item>
							)}
						</Field>
						<Field name="password" validate={requiredPassword}>
							{({ input, meta }) => (
								<Form.Item
									label={intl.formatMessage({ id: 'form.signup.password' })}
									validateStatus={
										meta.touched && meta.error ? 'error' : undefined
									}
									help={meta.touched && meta.error}
								>
									<Input.Password
										{...input}
										placeholder={intl.formatMessage({
											id: 'form.signup.password.placeholder',
										})}
									/>
								</Form.Item>
							)}
						</Field>
						<Field name="passwordConfirm" validate={requiredPasswordConfirm}>
							{({ input, meta }) => (
								<Form.Item
									label={intl.formatMessage({
										id: 'form.signup.password.confirm',
									})}
									validateStatus={
										meta.touched && meta.error ? 'error' : undefined
									}
									help={meta.touched && meta.error}
								>
									<Input.Password
										{...input}
										type="password"
										placeholder={intl.formatMessage({
											id: 'form.signup.password.placeholder',
										})}
									/>
								</Form.Item>
							)}
						</Field>
						<div className="links">
							<Link to={`login`} className="el-link el-link--primary">
								{intl.formatMessage({
									id: 'form.signup.login',
								})}
							</Link>
						</div>

						<Button
							htmlType="submit"
							disabled={!valid}
							type="primary"
							shape="round"
							size="large"
						>
							{intl.formatMessage({ id: 'form.signup.create' })}
						</Button>
					</Form>
				)}
			/>
		</div>
	)
}

export default Signup
