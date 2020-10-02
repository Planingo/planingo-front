import React, { useState } from 'react'
import './constraints.scss'
import { Switch, Button, Card } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useIntl } from 'react-intl'

const Constraints = () => {
	const intl = useIntl()

	const [studentChecked, setStudentChecked] = useState(true)
	return (
		<div className="constraints">
			<Button onClick={() => console.log}>Saved</Button>
			<Card
				title={intl.formatMessage({
					id: 'settings.constraints.modules',
				})}
			>
				<div className="constraint">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={studentChecked}
						onChange={setStudentChecked}
					/>
					<p>
						Module requis obligatoirement
						{/* {intl.formatMessage({
							id: `navigation.students`,
						})} */}
					</p>
				</div>
				<div className="constraint">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={studentChecked}
						onChange={setStudentChecked}
					/>
					<p>
						Module requis optionnellement
						{/* {intl.formatMessage({
							id: `navigation.students`,
						})} */}
					</p>
				</div>
				<div className="constraint">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={studentChecked}
						onChange={setStudentChecked}
					/>
					<p>
						Module sécable
						{/* {intl.formatMessage({
							id: `navigation.students`,
						})} */}
					</p>
				</div>
			</Card>
			<Card
				title={intl.formatMessage({
					id: 'settings.constraints.professor',
				})}
			>
				<div className="constraint">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={studentChecked}
						onChange={setStudentChecked}
					/>
					<p>
						Souhait d'intervention
						{/* {intl.formatMessage({
							id: `navigation.students`,
						})} */}
					</p>
				</div>
			</Card>
			<Card
				title={intl.formatMessage({
					id: 'settings.constraints.companies',
				})}
			>
				<div className="constraint">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={studentChecked}
						onChange={setStudentChecked}
					/>
					<p>
						Durée des sessions maximum en formation
						{/* {intl.formatMessage({
							id: `navigation.students`,
						})} */}
					</p>
				</div>
				<div className="constraint">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={studentChecked}
						onChange={setStudentChecked}
					/>
					<p>
						Durée des sessions minimum en formation
						{/* {intl.formatMessage({
							id: `navigation.students`,
						})} */}
					</p>
				</div>
				<div className="constraint">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={studentChecked}
						onChange={setStudentChecked}
					/>
					<p>
						Durée des sessions maximum en entreprise
						{/* {intl.formatMessage({
							id: `navigation.students`,
						})} */}
					</p>
				</div>
				<div className="constraint">
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						checked={studentChecked}
						onChange={setStudentChecked}
					/>
					<p>
						Durée des sessions minimum en entreprise
						{/* {intl.formatMessage({
							id: `navigation.students`,
						})} */}
					</p>
				</div>
			</Card>
		</div>
	)
}

export default Constraints
