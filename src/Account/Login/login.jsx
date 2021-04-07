import React from 'react'
import { useIntl } from 'react-intl'
import { Input, Form } from 'antd'
import { Button } from '@planingo/ditto'
import './login.scss'
import { Form as FinalForm, Field } from 'react-final-form'
import { useLogin } from './login.hooks'
import { Link } from 'react-router-dom'

const Login = () => {
	const intl = useIntl()

	const [onSubmit, loading] = useLogin()

	const requiredEmail = value =>
		value ? undefined : intl.formatMessage({ id: 'error.required' })

	const requiredPassword = value => {
		if (!value) return intl.formatMessage({ id: 'error.required' })

		if (value.length < 9)
			return intl.formatMessage({ id: 'error.password.character' })

		return undefined
	}

	return (
		<div className="login">
			<h1>{intl.formatMessage({ id: 'form.login' })}</h1>
			<FinalForm
				onSubmit={onSubmit}
				render={({ handleSubmit, valid }) => (
					<Form onFinish={handleSubmit} layout="vertical">
						<Field name="email" validate={requiredEmail}>
							{({ input, meta }) => (
								<Form.Item
									label={intl.formatMessage({ id: 'form.login.username' })}
									validateStatus={
										meta.touched && meta.error ? 'error' : undefined
									}
									help={meta.touched && meta.error}
								>
									<Input
										{...input}
										type="email"
										placeholder={intl.formatMessage({
											id: 'form.login.username.placeholder',
										})}
									/>
								</Form.Item>
							)}
						</Field>
						<Field name="password" validate={requiredPassword}>
							{({ input, meta }) => (
								<Form.Item
									label={intl.formatMessage({ id: 'form.login.password' })}
									validateStatus={
										meta.touched && meta.error ? 'error' : undefined
									}
									help={meta.touched && meta.error}
								>
									<Input.Password
										{...input}
										placeholder={intl.formatMessage({
											id: 'form.login.password.placeholder',
										})}
									/>
								</Form.Item>
							)}
						</Field>
						<div className="links">
							<Link className="el-link el-link--primary" to="reset">
								{intl.formatMessage({
									id: 'form.login.forget',
								})}
							</Link>
							<Link className="el-link el-link--primary" to="signup">
								{intl.formatMessage({
									id: 'form.login.signup',
								})}
							</Link>
						</div>
						<Button
							loading={loading}
							htmlType="submit"
							type="primary"
							shape="round"
							size="large"
						>
							{intl.formatMessage({ id: 'form.login.login' })}
						</Button>
					</Form>
				)}
			/>
		</div>
	)
}

export default Login
