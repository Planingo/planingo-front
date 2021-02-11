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
import { useFindSettingsByAccountId } from '../../Tools/MagicBook/Settings/settings.hooks'
import { Spin } from '@planingo/ditto'

const Navigation = () => {
	const intl = useIntl()

	const { settings, loading } = useFindSettingsByAccountId(
		useSelector(selectors.accountId),
	)

	if (loading)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

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
						<Link to="/students" className="pointer">
							<UserOutlined />
							<p>{intl.formatMessage({ id: 'navigation.students' })}</p>
						</Link>
					)}
					{settings.professor && (
						<Link to="/professors" className="pointer">
							<TeamOutlined />
							<p>{intl.formatMessage({ id: 'navigation.professors' })}</p>
						</Link>
					)}
					<Link to="/calendars" className="pointer">
						<CalendarOutlined />
						<p>{intl.formatMessage({ id: 'navigation.calendars' })}</p>
					</Link>
					{settings.pathway && (
						<Link to="/pathways/" className="pointer">
							<ExperimentOutlined />
							<p>{intl.formatMessage({ id: 'navigation.pathways' })}</p>
						</Link>
					)}
					{settings.module && (
						<Link to="/modules" className="pointer">
							<TagsOutlined />
							<p>{intl.formatMessage({ id: 'navigation.modules' })}</p>
						</Link>
					)}
					{settings.lesson && (
						<Link to="/lessons" className="pointer">
							<TagOutlined />
							<p>{intl.formatMessage({ id: 'navigation.lessons' })}</p>
						</Link>
					)}
					{settings.room && (
						<Link to="/rooms" className="pointer">
							<ShopOutlined />
							<p>{intl.formatMessage({ id: 'navigation.rooms' })}</p>
						</Link>
					)}
					{settings.company && (
						<Link to="/companies" className="pointer">
							<WifiOutlined />
							<p>{intl.formatMessage({ id: 'navigation.companies' })}</p>
						</Link>
					)}
				</div>
			</div>
			<div className="settings">
				<Link to="/settings" className="pointer">
					<SettingOutlined />
					<p>{intl.formatMessage({ id: 'navigation.settings' })}</p>
				</Link>
			</div>
		</div>
	)
}

export default Navigation
