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
import { useSelector } from 'react-redux'
import { selectors } from '../../Account/store'

const Navigation = () => {
	const intl = useIntl()

	const settings = useSelector(selectors.settings)

	return (
		<div className="navigation">
			<div className="top">
				<div className="logo">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<div className="main">
					{settings.student && (
						<Link to="/students">
							<UserOutlined />
							<p>{intl.formatMessage({ id: 'navigation.students' })}</p>
						</Link>
					)}
					{settings.professor && (
						<Link to="/professors">
							<TeamOutlined />
							<p>{intl.formatMessage({ id: 'navigation.professors' })}</p>
						</Link>
					)}
					<Link to="/calendars">
						<CalendarOutlined />
						<p>{intl.formatMessage({ id: 'navigation.calendars' })}</p>
					</Link>
					{settings.pathway && (
						<Link to="/pathways">
							<ExperimentOutlined />
							<p>{intl.formatMessage({ id: 'navigation.pathways' })}</p>
						</Link>
					)}
					{settings.module && (
						<Link to="/modules">
							<TagsOutlined />
							<p>{intl.formatMessage({ id: 'navigation.modules' })}</p>
						</Link>
					)}
					{settings.lesson && (
						<Link to="/lessons">
							<TagOutlined />
							<p>{intl.formatMessage({ id: 'navigation.lessons' })}</p>
						</Link>
					)}
					{settings.room && (
						<Link to="/rooms">
							<ShopOutlined />
							<p>{intl.formatMessage({ id: 'navigation.rooms' })}</p>
						</Link>
					)}
					{settings.company && (
						<Link to="/companies">
							<WifiOutlined />
							<p>{intl.formatMessage({ id: 'navigation.companies' })}</p>
						</Link>
					)}
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
