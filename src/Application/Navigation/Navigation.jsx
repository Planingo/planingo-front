import React from 'react'
import './navigation.scss'
import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { ReactComponent as Logo } from './media/sogme-blanc.svg'
import {
	CalendarOutlined,
	ExperimentOutlined,
	UserOutlined,
	TeamOutlined,
	SettingOutlined,
	WifiOutlined,
	TagsOutlined,
	TagOutlined,
	ShopOutlined,
} from '@ant-design/icons'

const Navigation = () => {
	const intl = useIntl()
	return (
		<div className="navigation">
			<div className="top">
				<div className="logo">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<div className="main">
					<Link to="/students">
						<UserOutlined />
						<p>{intl.formatMessage({ id: 'navigation.students' })}</p>
					</Link>
					<Link to="/professors">
						<TeamOutlined />
						<p>{intl.formatMessage({ id: 'navigation.professors' })}</p>
					</Link>
					<Link to="/calendars">
						<CalendarOutlined />
						<p>{intl.formatMessage({ id: 'navigation.calendars' })}</p>
					</Link>
					<Link to="/pathways">
						<ExperimentOutlined />
						<p>{intl.formatMessage({ id: 'navigation.pathways' })}</p>
					</Link>
					<Link to="/modules">
						<TagsOutlined />
						<p>{intl.formatMessage({ id: 'navigation.modules' })}</p>
					</Link>
					<Link to="/cours">
						<TagOutlined />
						<p>{intl.formatMessage({ id: 'navigation.cours' })}</p>
					</Link>
					<Link to="/rooms">
						<ShopOutlined />
						<p>{intl.formatMessage({ id: 'navigation.rooms' })}</p>
					</Link>
					<Link to="/compagnies">
						<WifiOutlined />
						<p>{intl.formatMessage({ id: 'navigation.compagnies' })}</p>
					</Link>
				</div>
			</div>
			<div className="settings">
				<Link to="/settings">
					<SettingOutlined />
					<p>{intl.formatMessage({ id: 'navigation.settings' })}</p>
				</Link>
			</div>
		</div>
	)
}

export default Navigation
