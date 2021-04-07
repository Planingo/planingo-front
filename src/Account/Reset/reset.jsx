import React from 'react'
import { useIntl } from 'react-intl'
import { Input, Form } from 'antd'
import { Button } from '@planingo/ditto'
import './reset.scss'
import { Form as FinalForm, Field } from 'react-final-form'

const Reset = () => {
	const intl = useIntl()
	const onSubmit = e => {
		e.preventDefault()
	}

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

	return (
		<div className="reset">
			<h1>{intl.formatMessage({ id: 'form.reset' })}</h1>
			<FinalForm
				onSubmit={onSubmit}
				initialValues={{ stooge: 'larry', employed: false }}
				render={({ handleSubmit, valid }) => (
					<Form onFinish={handleSubmit} layout="vertical">
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
										type="password"
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
							<a className="el-link el-link--primary" href="login">
								{intl.formatMessage({
									id: 'form.signup.login',
								})}
							</a>
						</div>
						<Button
							type="primary"
							shape="round"
							onClick={onSubmit}
							size="large"
						>
							{intl.formatMessage({ id: 'form.reset.update' })}
						</Button>
					</Form>
				)}
			/>
		</div>
	)
}

export default Reset
