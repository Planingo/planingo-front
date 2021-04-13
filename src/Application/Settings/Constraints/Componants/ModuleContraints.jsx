import React, { useState } from 'react'
import '../constraints.scss'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'
import { useModuleConstraints, useUpdateModuleConstraints } from '../Hook/moduleConstraints.hook'

export const ModuleContraints = () => {
    const accountId = useSelector(selectors.accountId)
    
    const {data, loading} = useModuleConstraints(accountId)
    
    const [updateModuleConstraints] = useUpdateModuleConstraints()

    const onUpdate = (input) => updateModuleConstraints(accountId, input)

	return (
		<>
            <div className="constraint">
						<Switch
							checkedChildren={<CheckOutlined />}
							unCheckedChildren={<CloseOutlined />}
							checked={data?.breakable}
							onChange={() => onUpdate({breakable: !data?.breakable})}
						/>
						<p>
							Module requis obligatoirement
						</p>
					</div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.moduleOptionnal}
                    onChange={() => onUpdate({moduleOptionnal: !data?.moduleOptionnal})}
                />
                <p>
                    Module requis optionnellement
                </p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.moduleMandatory}
                    onChange={() => onUpdate({moduleMandatory: !data?.moduleMandatory})}
                />
                <p>
                    Module sécable
                </p>
            </div>
        </>
	)
}
