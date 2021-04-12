import React, { useState } from 'react'
import '../constraints.scss'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

export const LessonContraints = () => {
	const [moduleConstraintSecable, setModuleConstraintSecable] = useState(true)

	return (
		<>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={moduleConstraintSecable}
                    onChange={setModuleConstraintSecable}
                />
                <p>
                    Cours sécable
                </p>
            </div>
        </>
	)
}
