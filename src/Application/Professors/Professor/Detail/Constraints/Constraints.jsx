import React from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../../Account/store'
import { useGetProfessorConstraints, useProfessorConstraintsSetting } from '../../../../Settings/Constraints/Hook/professorConstraints.hook'
import './constraints.scss'
import { useParams } from 'react-router'

export const Constraints = () => {
    const accountId = useSelector(selectors.accountId)
	const { id } = useParams()
    const {data: professorConstraintsSetting, loading: loadingProfessorConstraintsSetting} = useProfessorConstraintsSetting(accountId)
	const { data: professorConstraints, loading: loadingProfessorConstraints } = useGetProfessorConstraints(id)

	if (loadingProfessorConstraintsSetting || loadingProfessorConstraints) return null

	return (
		<div>
			{professorConstraintsSetting?.schoolPlace && 
					<p className='constraints'>{`Lieu de la formation : ${professorConstraints?.constraints.schoolPlace || '-'}`}</p>
			}
			{professorConstraintsSetting?.intervention && 
				<div className='constraints'>
					<p>Interventions souhaitées : </p>
					<p>{`Lundi : ${professorConstraints?.constraints?.interventionMonday?.join(" et ") || '-'}`}</p>
					<p>{`Mardi : ${professorConstraints?.constraints?.interventionTuesday?.join(" et ") || '-'}`}</p>
					<p>{`Mercredi : ${professorConstraints?.constraints?.interventionWednesday?.join(" et ") || '-'}`}</p>
					<p>{`Jeudi : ${professorConstraints?.constraints?.interventionThursday?.join(" et ") || '-'}`}</p>
					<p>{`Vendredi : ${professorConstraints?.constraints?.interventionFriday?.join(" et ") || '-'}`}</p>
				</div>
			}
		</div>
	)
}
