import React, { useState } from 'react'
import '../constraints.scss'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

export const ModuleContraints = () => {
	const [moduleConstraint, setModuleConstraint] = useState(true)
	const [moduleConstraintOptionnal, setModuleConstraintOptionnal] = useState(true)
	const [moduleConstraintSecable, setModuleConstraintSecable] = useState(true)

	return (
		<>
            <div className="constraint">
						<Switch
							checkedChildren={<CheckOutlined />}
							unCheckedChildren={<CloseOutlined />}
							checked={moduleConstraint}
							onChange={setModuleConstraint}
						/>
						<p>
							Module requis obligatoirement
						</p>
					</div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={moduleConstraintOptionnal}
                    onChange={setModuleConstraintOptionnal}
                />
                <p>
                    Module requis optionnellement
                </p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={moduleConstraintSecable}
                    onChange={setModuleConstraintSecable}
                />
                <p>
                    Module sécable
                </p>
            </div>
        </>
	)
}
