import React from 'react'
import '../constraints.scss'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'
import { useCompanyConstraints, useUpdateCompanyConstraints } from '../Hook/companyConstraints.hook'

export const CompanyContraints = () => {
    const accountId = useSelector(selectors.accountId)
    
    const {data, loading} = useCompanyConstraints(accountId)
    
    const [updateCompanyConstraints] = useUpdateCompanyConstraints()

    const onUpdate = (input) => updateCompanyConstraints(accountId, input)

    if(loading) return null

	return (
		<>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.maxSchoolSession}
                    onChange={() => onUpdate({maxSchoolSession: !data?.maxSchoolSession})}
                />
                <p>Durée des sessions maximum en formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.minSchoolSession}
                    onChange={() => onUpdate({minSchoolSession: !data?.minSchoolSession})}
                />
                <p>Durée des sessions minimum en formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.maxCompanySession}
                    onChange={() => onUpdate({maxCompanySession: !data?.maxCompanySession})}
                />
                <p>Durée des sessions maximum en entreprise</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.minCompanySession}
                    onChange={() => onUpdate({minCompanySession: !data?.minCompanySession})}
                />
                <p>Durée des sessions minimum en entreprise</p>
            </div>
        </>
	)
}
