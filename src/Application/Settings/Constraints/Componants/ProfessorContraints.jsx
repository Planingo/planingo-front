import React from 'react'
import '../constraints.scss'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useProfessorConstraints, useUpdateProfessorConstraints } from '../Hook/professorConstraints.hook'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'

export const ProfessorContraints = () => {
    const accountId = useSelector(selectors.accountId)
    
    const {data, loading} = useProfessorConstraints(accountId)
    
    const [updateProfessorConstraints] = useUpdateProfessorConstraints()

    const onUpdate = (input) => updateProfessorConstraints(accountId, input)

    if (loading) return null

	return (
		<>
        <div className="constraint">
            <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                checked={data?.intervention}
                onChange={() => onUpdate({intervention: !data?.intervention})}
            />
            <p>Souhait d'intervention</p>
        </div>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.schoolPlace}
                    onChange={() => onUpdate({schoolPlace: !data?.schoolPlace})}
                />
                <p>Lieu de l'intervention</p>
            </div>
        </>
	)
}
