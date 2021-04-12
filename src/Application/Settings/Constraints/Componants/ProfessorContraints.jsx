import React, { useState } from 'react'
import '../constraints.scss'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

export const ProfessorContraints = () => {
	const [professorConstraint, setProfessorConstraint] = useState(true)

	return (
		<>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={professorConstraint}
                    onChange={setProfessorConstraint}
                />
                <p>Souhait d'intervention</p>
            </div>
        </>
	)
}
