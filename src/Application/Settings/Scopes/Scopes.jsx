import React from 'react'
import './scopes.scss'
import { useIntl } from 'react-intl'
import { Switch, Card, Button, Spin } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { selectors } from '../../../Account/store'
import { useSelector } from 'react-redux'
import { useUpdateSettingsById } from '../../../Account/Login/login.hooks'
import { useFindSettingsByAccountId } from '../../../Tools/MagicBook/Settings/settings.hooks'
import { Field, Form } from 'react-final-form'

const Scopes = () => {
	const intl = useIntl()

	const { settings, loading } = useFindSettingsByAccountId(
		useSelector(selectors.accountId),
	)

	const [updateSettingsById] = useUpdateSettingsById()

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)
	return (
		<Form
			initialValues={settings}
			onSubmit={(values) => updateSettingsById({ variables: values })}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit} className="scopes">
					<Button htmlType="submit">Saved</Button>

					<Card title="Navigation">
						<div className="scope">
							<Field
								type="checkbox"
								name="student"
								render={({ input }) => (
									<Switch
										checkedChildren={<CheckOutlined />}
										unCheckedChildren={<CloseOutlined />}
										{...input}
									/>
								)}
							/>

							<p>
								{intl.formatMessage({
									id: `navigation.students`,
								})}
							</p>
						</div>
						<div className="scope">
							<Field
								type="checkbox"
								name="professor"
								render={({ input }) => (
									<Switch
										checkedChildren={<CheckOutlined />}
										unCheckedChildren={<CloseOutlined />}
										{...input}
									/>
								)}
							/>

							<p>
								{intl.formatMessage({
									id: `navigation.professors`,
								})}
							</p>
						</div>
						<div className="scope">
							<Field
								type="checkbox"
								name="pathway"
								render={({ input }) => (
									<Switch
										checkedChildren={<CheckOutlined />}
										unCheckedChildren={<CloseOutlined />}
										{...input}
									/>
								)}
							/>
							<p>
								{intl.formatMessage({
									id: `navigation.pathways`,
								})}
							</p>
						</div>
						<div className="scope">
							<Field
								type="checkbox"
								name="module"
								render={({ input }) => (
									<Switch
										checkedChildren={<CheckOutlined />}
										unCheckedChildren={<CloseOutlined />}
										{...input}
									/>
								)}
							/>
							<p>
								{intl.formatMessage({
									id: `navigation.modules`,
								})}
							</p>
						</div>
						<div className="scope">
							<Field
								type="checkbox"
								name="lesson"
								render={({ input }) => (
									<Switch
										checkedChildren={<CheckOutlined />}
										unCheckedChildren={<CloseOutlined />}
										{...input}
									/>
								)}
							/>
							<p>
								{intl.formatMessage({
									id: `navigation.lessons`,
								})}
							</p>
						</div>
						<div className="scope">
							<Field
								type="checkbox"
								name="room"
								render={({ input }) => (
									<Switch
										checkedChildren={<CheckOutlined />}
										unCheckedChildren={<CloseOutlined />}
										{...input}
									/>
								)}
							/>
							<p>
								{intl.formatMessage({
									id: `navigation.rooms`,
								})}
							</p>
						</div>
						<div className="scope">
							<Field
								type="checkbox"
								name="company"
								render={({ input }) => (
									<Switch
										checkedChildren={<CheckOutlined />}
										unCheckedChildren={<CloseOutlined />}
										{...input}
									/>
								)}
							/>
							<p>
								{intl.formatMessage({
									id: `navigation.companies`,
								})}
							</p>
						</div>
					</Card>
				</form>
			)}
		/>
	)
}

export default Scopes
