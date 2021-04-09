import React from 'react'
import './navigation.scss'
import { NavLink, Link } from 'react-router-dom'
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

	const pathways = [
		{
			key: 'student',
			to: '/students',
			message: <>
				<UserOutlined />
				<p>{intl.formatMessage({ id: 'navigation.students' })}</p>
			</>
		},
		{
			key: 'professor',
			to: '/professors',
			message: <>
				<TeamOutlined />
				<p>{intl.formatMessage({ id: 'navigation.professors' })}</p>
			</>
		},
		{
			key: 'calendar',
			to: '/calendars',
			message: <>
				<CalendarOutlined />
				<p>{intl.formatMessage({ id: 'navigation.calendars' })}</p>
			</>
		},
		{
			key: 'pathway',
			to: '/pathways',
			message: <>
				<ExperimentOutlined />
				<p>{intl.formatMessage({ id: 'navigation.pathways' })}</p>
			</>
		},
		{
			key: 'module',
			to: '/modules',
			message: <>
				<TagsOutlined />
				<p>{intl.formatMessage({ id: 'navigation.modules' })}</p>
			</>
		},
		{
			key: 'lesson',
			to: '/lessons',
			message: <>
				<TagOutlined />
				<p>{intl.formatMessage({ id: 'navigation.lessons' })}</p>
			</>
		},
		{
			key: 'room',
			to: '/rooms',
			message: <>
				<ShopOutlined />
				<p>{intl.formatMessage({ id: 'navigation.rooms' })}</p>
			</>
		},
		{
			key: 'company',
			to: '/companies',
			message: <>
				<WifiOutlined />
				<p>{intl.formatMessage({ id: 'navigation.companies' })}</p>
			</>
		},
		{
			key: 'setting',
			to: '/settings',
			message: <>
				<SettingOutlined />
				<p>{intl.formatMessage({ id: 'navigation.settings' })}</p>
			</>
		}
	]

	return (
		<div className="navigation">
			<div className="top">
				<div className="logo">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<div className="main">
					{
						pathways.filter(({key}) => settings[key] || key === 'calendar').map(({key, to, message}) => (
							<NavLink key={key} activeClassName='active' to={to} className="pointer">
								{message}
							</NavLink>
						))
					}
				</div>
			</div>
			<div className="settings">
			{
				pathways.filter(({key}) => key === 'setting').map(({key, to, message}) => (
					<NavLink key={key} to={to} className="pointer">
						{message}
					</NavLink>
				))
			}
			</div>
		</div>
	)
}

export default Navigation
