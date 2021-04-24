import React from 'react'
import '../constraints.scss'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'
import { usePathwayConstraintsSetting, useUpdatePathwayConstraintsSetting } from '../Hook/pathwayConstraints.hook'

export const PathwayConstraints = () => {
    const accountId = useSelector(selectors.accountId)
    
    const {data, loading} = usePathwayConstraintsSetting(accountId)
    
    const [updatePathwayConstraints] = useUpdatePathwayConstraintsSetting()

    const onUpdate = (input) => updatePathwayConstraints(accountId, input)

    if (loading) return null

	return (
		<>
            <div className="constraint">
						<Switch
							checkedChildren={<CheckOutlined />}
							unCheckedChildren={<CloseOutlined />}
							checked={data?.moduleMandatory}
							onChange={() => onUpdate({moduleMandatory: !data?.moduleMandatory})}
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
                    checked={data?.schoolPlace}
                    onChange={() => onUpdate({schoolPlace: !data?.schoolPlace})}
                />
                <p>Lieu de formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.maxSchool}
                    onChange={() => onUpdate({maxSchool: !data?.maxSchool})}
                />
                <p>Volume d'heure maximum de la formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.minSchool}
                    onChange={() => onUpdate({minSchool: !data?.minSchool})}
                />
                <p>Volume d'heure minimum de la formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.maxPathway}
                    onChange={() => onUpdate({maxPathway: !data?.maxPathway})}
                />
                <p>Durée maximum de la formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.minPathway}
                    onChange={() => onUpdate({minPathway: !data?.minPathway})}
                />
                <p>Durée minimum de la formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.maxSchoolSession}
                    onChange={() => onUpdate({maxSchoolSession: !data?.maxSchoolSession})}
                />
                <p>Durée maximum des sessions de formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.minSchoolSession}
                    onChange={() => onUpdate({minSchoolSession: !data?.minSchoolSession})}
                />
                <p>Durée minimum des sessions de formation</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.maxCompanySession}
                    onChange={() => onUpdate({maxCompanySession: !data?.maxCompanySession})}
                />
                <p>Durée maximum des sessions d'entreprise</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.minCompanySession}
                    onChange={() => onUpdate({minCompanySession: !data?.minCompanySession})}
                />
                <p>Durée minimum des sessions d'entreprise</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.schoolMandatory}
                    onChange={() => onUpdate({schoolMandatory: !data?.schoolMandatory})}
                />
                <p>Période en cours obligatoire</p>
            </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.companyMandatory}
                    onChange={() => onUpdate({companyMandatory: !data?.companyMandatory})}
                />
                <p>Période en entreprise obligatoire</p>
            </div>
        </>
	)
}
