import React, { useState } from 'react'
import './navigation.scss'
import { NavLink } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Menu, Modal } from 'antd'
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
import { Spin, Tooltip } from '@planingo/ditto'
import { useAccountById } from '../../Tools/MagicBook/Account/account.hooks'

const { SubMenu } = Menu;

const Navigation = () => {
	const intl = useIntl()
	const [isModalVisible, setIsModalVisible] = useState(false);

	const userId = useSelector(selectors.accountId)
	const {email, loadingAccount} = useAccountById(userId)

	const { settings, loading } = useFindSettingsByAccountId(userId)

	if (loading || loadingAccount)
		return (
			<div>
				<Spin size="large" />
			</div>
		)

	const pathways = [
		{
			key: 'student',
			to: '/students',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.students' })}>
				<UserOutlined />
			</Tooltip>
		},
		{
			key: 'professor',
			to: '/professors',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.professors' })}>
				<TeamOutlined />
			</Tooltip>
		},
		{
			key: 'calendar',
			to: '/calendars',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.calendars' })}>
				<CalendarOutlined />
			</Tooltip>
		},
		{
			key: 'lesson',
			to: '/lessons',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.lessons' })}>
				<TagOutlined />
			</Tooltip>
		},
		{
			key: 'module',
			to: '/modules',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.modules' })}>
				<TagsOutlined />
			</Tooltip>
		},
		{
			key: 'pathway',
			to: '/pathways',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.pathways' })}>
				<ExperimentOutlined />
			</Tooltip>
		},
		{
			key: 'room',
			to: '/rooms',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.rooms' })}>
				<ShopOutlined />
			</Tooltip>
		},
		{
			key: 'company',
			to: '/companies',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.companies' })}>
				<WifiOutlined />
			</Tooltip>
		},
		{
			key: 'setting',
			to: '/settings',
			message: <Tooltip placement='right' title={intl.formatMessage({ id: 'navigation.settings' })}>
				<SettingOutlined />
			</Tooltip>
		}
	]

	function handleClick(e) {
	}


	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	
	return (
		<div className="navigation">
			<div className="top">
				<div className="logo">
				<Menu onClick={handleClick} mode="vertical" triggerSubMenuAction="click">
					<SubMenu key="sub1" title={<img
							alt="profil"
							src={`https://avatars.bugsyaya.dev/50/${userId}`}
						/>}>
						<Menu.Item key="1">{email}</Menu.Item>
						<Menu.Item key="2">
							<p onClick={showModal}>
								Mon compte
							</p>
						</Menu.Item>
						<Menu.Item key="3">Déconnexion</Menu.Item>
					</SubMenu>		
				</Menu>
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
			<Modal title="Mon compte" visible={isModalVisible} okText="Enregistrer" onOk={handleOk} onCancel={handleCancel}>
				<p>{email}</p>
			</Modal>
		</div>
	)
}

export default Navigation
