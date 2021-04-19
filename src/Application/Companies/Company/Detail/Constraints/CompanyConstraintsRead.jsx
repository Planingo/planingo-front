import React from 'react'
import './constraints.scss'
import { useGetCompanyConstraints, useCompanyConstraintsSetting } from '../../../../Settings/Constraints/Hook/companyConstraints.hook'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../../Account/store'

export const CompanyConstraintsRead = () => {
	const { id } = useParams()
    const accountId = useSelector(selectors.accountId)
    const {data: companyConstraintsSetting, loading: loadingCompanyConstraintsSetting} = useCompanyConstraintsSetting(accountId)
	const { data: companyConstraints, loading: loadingCompanyConstraints } = useGetCompanyConstraints(id)

	if (loadingCompanyConstraintsSetting || loadingCompanyConstraints) return null

	return (
		<div>
			{companyConstraintsSetting?.maxSchoolSession && 
				<p className='constraints'>{`Durée maximum des sessions de formation : ${companyConstraints?.constraints.maxSchoolSession || '-'}`}</p>
			}
			{companyConstraintsSetting?.minSchoolSession && 
				<p className='constraints'>{`Durée minimum des sessions de formation : ${companyConstraints?.constraints.minSchoolSession || '-'}`}</p>
			}
			{companyConstraintsSetting?.maxCompanySession && 
				<p className='constraints'>{`Durée maximum des sessions d'entreprise : ${companyConstraints?.constraints.maxCompanySession || '-'}`}</p>
			}
			{companyConstraintsSetting?.minCompanySession && 
				<p className='constraints'>{`Durée minimum des sessions d'entreprise : ${companyConstraints?.constraints.minCompanySession || '-'}`}</p>
			}
			{companyConstraintsSetting?.schoolMandatory && 
				<p className='constraints'>{`Période en cours obligatoire : ${companyConstraints?.constraints.schoolMandatory || '-'}`}</p>
			}
			{companyConstraintsSetting?.companyMandatory && 
				<p className='constraints'>{`Période en entreprise obligatoire : ${companyConstraints?.constraints.companyMandatory || '-'}`}</p>
			}
		</div>
	)
}
