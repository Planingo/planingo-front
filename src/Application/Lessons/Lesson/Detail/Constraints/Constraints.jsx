import React from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../../Account/store'
import './constraints.scss'
import { useParams } from 'react-router'
import { useGetLessonConstraints, useLessonConstraintsSetting } from '../../../../Settings/Constraints/Hook/lessonConstraints.hook'

export const Constraints = () => {
    const accountId = useSelector(selectors.accountId)
	const { id } = useParams()
    const {data: lessonConstraintsSetting, loading: loadingLessonConstraintsSetting} = useLessonConstraintsSetting(accountId)
	const { data: lessonConstraints, loading: loadingLessonConstraints } = useGetLessonConstraints(id)

	if (loadingLessonConstraintsSetting || loadingLessonConstraints) return null

	return (
		<div>
			{lessonConstraintsSetting?.breakable && 
				<p>{`Le cours est sécable : ${lessonConstraints?.constraints?.breakable ? 'oui' : 'non'}`}</p>
			}
		</div>
	)
}
