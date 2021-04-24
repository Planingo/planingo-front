import React from 'react'
import './constraints.scss'
import { useGetStudentConstraints, useStudentConstraintsSetting } from '../../../../Settings/Constraints/Hook/studentConstraints.hook'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../../Account/store'

export const Constraints = () => {
	const { id } = useParams()
    const accountId = useSelector(selectors.accountId)
    const {data: studentConstraintsSetting, loading: loadingStudentConstraintsSetting} = useStudentConstraintsSetting(accountId)
	const { data: studentConstraints, loading: loadingStudentConstraints } = useGetStudentConstraints(id)

	if (loadingStudentConstraintsSetting || loadingStudentConstraints) return null

	return (
		<div>
			{studentConstraintsSetting?.schoolPlace && 
				<p className='constraints'>{`Lieu de la formation : ${studentConstraints?.constraints.schoolPlace || '-'}`}</p>
			}
			{studentConstraintsSetting?.maxSchool && 
				<p className='constraints'>{`Volume d'heure maximum de la formation : ${studentConstraints?.constraints.maxSchool || '-'}`}</p>
			}
			{studentConstraintsSetting?.minSchool && 
				<p className='constraints'>{`Volume d'heure minimum de la formation : ${studentConstraints?.constraints.minSchool || '-'}`}</p>
			}
			{studentConstraintsSetting?.maxPathway && 
				<p className='constraints'>{`Durée maximum de la formation : ${studentConstraints?.constraints.maxPathway || '-'}`}</p>
			}
			{studentConstraintsSetting?.minPathway && 
				<p className='constraints'>{`Durée minimum de la formation : ${studentConstraints?.constraints.minPathway || '-'}`}</p>
			}
			{studentConstraintsSetting?.maxSchoolSession && 
				<p className='constraints'>{`Durée maximum des sessions de formation : ${studentConstraints?.constraints.maxSchoolSession || '-'}`}</p>
			}
			{studentConstraintsSetting?.minSchoolSession && 
				<p className='constraints'>{`Durée minimum des sessions de formation : ${studentConstraints?.constraints.minSchoolSession || '-'}`}</p>
			}
			{studentConstraintsSetting?.maxCompanySession && 
				<p className='constraints'>{`Durée maximum des sessions d'entreprise : ${studentConstraints?.constraints.maxCompanySession || '-'}`}</p>
			}
			{studentConstraintsSetting?.minCompanySession && 
				<p className='constraints'>{`Durée minimum des sessions d'entreprise : ${studentConstraints?.constraints.minCompanySession || '-'}`}</p>
			}
			{studentConstraintsSetting?.schoolMandatory && 
				<p className='constraints'>{`Période en cours obligatoire : ${studentConstraints?.constraints.schoolMandatory || '-'}`}</p>
			}
			{studentConstraintsSetting?.companyMandatory && 
				<p className='constraints'>{`Période en entreprise obligatoire : ${studentConstraints?.constraints.companyMandatory || '-'}`}</p>
			}
		</div>
	)
}
