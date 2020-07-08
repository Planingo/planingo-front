import React, { useState } from 'react'
import './scopes.scss'
import { useIntl } from 'react-intl'
import { Switch, Card, Button } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { selectors } from '../../../Account/store'
import { useSelector } from 'react-redux'
import { useUpdateSettingsById } from '../../../Account/Login/login.hooks'

const Scopes = () => {
	const intl = useIntl()

	const settings = useSelector(selectors.settings)

	const [studentChecked, setStudentChecked] = useState(settings.student)
	const [professorChecked, setProfessorChecked] = useState(settings.professor)
	const [pathwayChecked, setPathwayChecked] = useState(settings.pathway)
	const [moduleChecked, setModuleChecked] = useState(settings.module)
	const [lessonChecked, setLessonChecked] = useState(settings.lesson)
	const [roomChecked, setRoomChecked] = useState(settings.room)
	const [companyChecked, setCompanyChecked] = useState(settings.company)

	const updateSettingsById = useUpdateSettingsById()

	return (
		<div className="scopes">
			<Button
				onClick={() =>
					updateSettingsById(
						settings.id,
						companyChecked,
						lessonChecked,
						moduleChecked,
						pathwayChecked,
						professorChecked,
						roomChecked,
						studentChecked,
					)
				}
			>
				Saved
			</Button>
			<Card title="Navigation">
				<div className="scope">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={studentChecked}
						onChange={setStudentChecked}
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
						checked={professorChecked}
						onChange={setProfessorChecked}
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
						checked={pathwayChecked}
						onChange={setPathwayChecked}
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
						checked={moduleChecked}
						onChange={setModuleChecked}
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
						checked={lessonChecked}
						onChange={setLessonChecked}
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
						checked={roomChecked}
						onChange={setRoomChecked}
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
						checked={companyChecked}
						onChange={setCompanyChecked}
					/>
					<p>
						{intl.formatMessage({
							id: `navigation.compagnies`,
						})}
					</p>
				</div>
			</Card>
		</div>
	)
}

export default Scopes
