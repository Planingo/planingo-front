import React from 'react'
import '../constraints.scss'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'
import { useRoomConstraints, useUpdateRoomConstraints } from '../Hook/roomConstraints.hook'

export const RoomConstraints = () => {
    const accountId = useSelector(selectors.accountId)
    
    const {data, loading} = useRoomConstraints(accountId)
    
    const [updateRoomConstraints] = useUpdateRoomConstraints()

    const onUpdate = (input) => updateRoomConstraints(accountId, input)

    if (loading) return null

	return (
		<>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={data?.capacity}
                    onChange={() => onUpdate({capacity: !data?.capacity})}
                />
                <p>Capacité de la salle</p>
            </div>
        </>
	)
}
