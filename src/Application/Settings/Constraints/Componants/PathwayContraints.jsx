import React, { useState } from 'react'
import '../constraints.scss'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

export const PathwayContraints = () => {
	const [schoolPlace, setSchoolPlace] = useState(true)
	const [maxSchool, setMaxSchool] = useState(true)
	const [minSchool, setMinSchool] = useState(true)
	const [maxPathway, setMaxPathway] = useState(true)
	const [minPathway, setMinPathway] = useState(true)
	const [maxSchoolSession, setMaxSchoolSession] = useState(true)
	const [minSchoolSession, setMinSchoolSession] = useState(true)
	const [maxCompanySession, setMaxCompanySession] = useState(true)
	const [minCompanySession, setMinCompanySession] = useState(true)
	const [schoolMandatory, setSchoolMandatory] = useState(true)
	const [companyMandatory, setCompanyMandatory] = useState(true)

	return (
		<>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={schoolPlace}
                    onChange={setSchoolPlace}
                />
                <p>Lieu de formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={maxSchool}
                    onChange={setMaxSchool}
                />
                <p>Volume d'heure maximum de la formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={minSchool}
                    onChange={setMinSchool}
                />
                <p>Volume d'heure minimum de la formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={maxPathway}
                    onChange={setMaxPathway}
                />
                <p>Durée maximum de la formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={minPathway}
                    onChange={setMinPathway}
                />
                <p>Durée minimum de la formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={maxSchoolSession}
                    onChange={setMaxSchoolSession}
                />
                <p>Durée maximum des sessions de formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={minSchoolSession}
                    onChange={setMinSchoolSession}
                />
                <p>Durée minimum des sessions de formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={maxCompanySession}
                    onChange={setMaxCompanySession}
                />
                <p>Durée maximum des sessions d'entreprise</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={minCompanySession}
                    onChange={setMinCompanySession}
                />
                <p>Durée minimum des sessions d'entreprise</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={schoolMandatory}
                    onChange={setSchoolMandatory}
                />
                <p>Période en cours obligatoire</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={companyMandatory}
                    onChange={setCompanyMandatory}
                />
                <p>Période en entreprise obligatoire</p>
            </div>
        </>
	)
}
