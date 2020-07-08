import React from 'react'
import './settings.scss'
import { Tabs } from 'antd'
import { useIntl } from 'react-intl'
import Global from './Global/Global'
import Constraints from './Constraints/Constraints'
import Scopes from './Scopes/Scopes'
import Schools from './Schools/Schools'

const Settings = () => {
	const intl = useIntl()
	const { TabPane } = Tabs
	return (
		<div className="settings">
			<div className="card-container">
				<Tabs type="card" animated>
					<TabPane
						className="settings-constraints"
						tab={intl.formatMessage({ id: 'settings.constraints' })}
						key="1"
					>
						<Constraints />
					</TabPane>
					<TabPane
						className="settings-scope"
						tab={intl.formatMessage({ id: 'settings.scope' })}
						key="2"
					>
						<Scopes />
					</TabPane>
					<TabPane
						className="settings-school"
						tab={intl.formatMessage({ id: 'settings.school' })}
						key="3"
					>
						<Schools />
					</TabPane>
					<TabPane
						className="settings-global"
						tab={intl.formatMessage({ id: 'settings.global' })}
						key="4"
					>
						<Global />
					</TabPane>
				</Tabs>
			</div>
		</div>
	)
}

export default Settings
