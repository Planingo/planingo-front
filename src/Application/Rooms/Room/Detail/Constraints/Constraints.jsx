import React from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../../Account/store'
import './constraints.scss'
import { useParams } from 'react-router'
import { useGetRoomConstraints, useRoomConstraintsSetting } from '../../../../Settings/Constraints/Hook/roomConstraints.hook'

export const Constraints = () => {
    const accountId = useSelector(selectors.accountId)
	const { id } = useParams()
    const {data: roomConstraintsSetting, loading: loadingRoomConstraintsSetting} = useRoomConstraintsSetting(accountId)
	const { data: roomConstraints, loading: loadingRoomConstraints } = useGetRoomConstraints(id)

	if (loadingRoomConstraintsSetting || loadingRoomConstraints) return null

	const capacity = roomConstraints?.constraints?.capacity

	return (
		<div>
			{roomConstraintsSetting?.capacity && 
				<p>Capacité de la salle : {capacity ? `${capacity} étudiant${capacity > 1 ? 's' : ''}` : '-' }</p>
			}
		</div>
	)
}
