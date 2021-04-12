import React, { useState } from 'react'
import '../constraints.scss'
import { Switch } from '@planingo/ditto'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

export const RoomConstraints = () => {
	const [roomCapacityConstraint, setRoomCapacityConstraint] = useState(true)

	return (
		<>
            <div className="constraint">
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    checked={roomCapacityConstraint}
                    onChange={setRoomCapacityConstraint}
                />
                <p>Capacité de la salle</p>
            </div>
        </>
	)
}
