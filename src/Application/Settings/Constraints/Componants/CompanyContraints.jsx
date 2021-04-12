import React, { useState } from 'react'
import '../constraints.scss'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

export const CompanyContraints = () => {
	const [maxSchoolConstraint, setMaxSchoolConstraint] = useState(true)
	const [minSchoolConstraint, setMinSchoolConstraint] = useState(true)
	const [maxCompanyConstraint, setMaxCompanyConstraint] = useState(true)
	const [minCompanyConstraint, setMinCompanyConstraint] = useState(true)

	return (
		<>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={maxSchoolConstraint}
                    onChange={setMaxSchoolConstraint}
                />
                <p>Durée des sessions maximum en formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={minSchoolConstraint}
                    onChange={setMinSchoolConstraint}
                />
                <p>Durée des sessions minimum en formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={maxCompanyConstraint}
                    onChange={setMaxCompanyConstraint}
                />
                <p>Durée des sessions maximum en entreprise</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={minCompanyConstraint}
                    onChange={setMinCompanyConstraint}
                />
                <p>Durée des sessions minimum en entreprise</p>
            </div>
        </>
	)
}
