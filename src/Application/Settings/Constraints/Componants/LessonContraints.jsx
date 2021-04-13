import React from 'react'
import '../constraints.scss'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'
import { useLessonConstraints, useUpdateLessonConstraints } from '../Hook/lessonConstraints.hook'

export const LessonContraints = () => {
    const accountId = useSelector(selectors.accountId)
    
    const {data, loading} = useLessonConstraints(accountId)
    
    const [updateLessonConstraints] = useUpdateLessonConstraints()

    const onUpdate = (input) => updateLessonConstraints(accountId, input)

    if (loading) return null

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
                    Cours sécable
                </p>
            </div>
        </>
	)
}
