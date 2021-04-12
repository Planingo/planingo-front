import React from 'react'
import './scopes.scss'
import { useIntl } from 'react-intl'
import { Collapse } from 'antd'
import { Switch, Spin } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { selectors } from '../../../Account/store'
import { useSelector } from 'react-redux'
import { useSetting, useUpdateSetting } from './Hook/scope.hook'

const Scopes = () => {
	const { Panel } = Collapse;
	const intl = useIntl()
	const accountId = useSelector(selectors.accountId)
	const [updateSetting] = useUpdateSetting()
	const { settings, loading } = useSetting(accountId)

	const onUpdateSetting = (input) => updateSetting(accountId, input)

	function callback(key) {
		console.log(key);
	}	  

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)
	return (
		<Collapse defaultActiveKey={['1']} onChange={callback}>
			<Panel header='Navigation ' key="1">
				<div className="scope">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={settings.student}
						onChange={() => onUpdateSetting({student: !settings.student})}
					/>
					<p>
						{intl.formatMessage({
							id: `navigation.students`,
						})}
					</p>
				</div>
				<div className="scope">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={settings.professor}
						onChange={() => onUpdateSetting({professor: !settings.professor})}
					/>
					<p>
						{intl.formatMessage({
							id: `navigation.professors`,
						})}
					</p>
				</div>
				<div className="scope">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={settings.pathway}
						onChange={() => onUpdateSetting({pathway: !settings.pathway})}
					/>
					<p>
						{intl.formatMessage({
							id: `navigation.pathways`,
						})}
					</p>
				</div>
				<div className="scope">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={settings.module}
						onChange={() => onUpdateSetting({module: !settings.module})}
					/>
					<p>
						{intl.formatMessage({
							id: `navigation.modules`,
						})}
					</p>
				</div>
				<div className="scope">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={settings.lesson}
						onChange={() => onUpdateSetting({lesson: !settings.lesson})}
					/>
					<p>
						{intl.formatMessage({
							id: `navigation.lessons`,
						})}
					</p>
				</div>
				<div className="scope">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={settings.room}
						onChange={() => onUpdateSetting({room: !settings.room})}
					/>
					<p>
						{intl.formatMessage({
							id: `navigation.rooms`,
						})}
					</p>
				</div>
				<div className="scope">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={settings.company}
						onChange={() => onUpdateSetting({company: !settings.company})}
					/>
					<p>
						{intl.formatMessage({
							id: `navigation.companies`,
						})}
					</p>
				</div>
			</Panel>
		</Collapse>
	)
}

export default Scopes
