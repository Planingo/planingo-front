import React from 'react'
import './constraints.scss'
import { useGetPathwayConstraints, usePathwayConstraintsSetting } from '../../../../Settings/Constraints/Hook/pathwayConstraints.hook'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../../Account/store'
import { useGetModuleById } from '../../../../Modules/modules.hooks'

export const PathwayConstraintsRead = () => {
	const { id } = useParams()
    const accountId = useSelector(selectors.accountId)
    const {data: pathwayConstraintsSetting, loading: loadingPathwayConstraintsSetting} = usePathwayConstraintsSetting(accountId)
	const { data: pathwayConstraints, loading: loadingPathwayConstraints } = useGetPathwayConstraints(id)

	if (loadingPathwayConstraintsSetting || loadingPathwayConstraints) return null

	return (
		<div>
			{pathwayConstraintsSetting?.moduleMandatory &&
				<>
					<p className='constraints'>Liste des modules obligatoires : {!pathwayConstraints?.constraints?.moduleMandatory && '-'}</p>
					{pathwayConstraints?.constraints?.moduleMandatory && 
						<ul>
							{pathwayConstraints.constraints.moduleMandatory.map(module => <Module key={module} id={module} />)}
						</ul>
					}
				</>
			}
			{pathwayConstraintsSetting?.moduleOptionnal && 
				<>
					<p className='constraints'>Liste des modules optionnels : {!pathwayConstraints?.constraints?.moduleOptionnal && '-'}</p>
					{pathwayConstraints?.constraints?.moduleOptionnal && 
						<ul>
							{pathwayConstraints?.constraints?.moduleOptionnal?.map(module => <Module key={module} id={module} />)}
						</ul>
					}
				</>
			}
			{pathwayConstraintsSetting?.schoolPlace && 
				<p className='constraints'>{`Lieu de la formation : ${pathwayConstraints?.constraints.schoolPlace || '-'}`}</p>
			}
			{pathwayConstraintsSetting?.maxSchool && 
				<p className='constraints'>{`Volume d'heure maximum de la formation : ${pathwayConstraints?.constraints.maxSchool || '-'}`}</p>
			}
			{pathwayConstraintsSetting?.minSchool && 
				<p className='constraints'>{`Volume d'heure minimum de la formation : ${pathwayConstraints?.constraints.minSchool || '-'}`}</p>
			}
			{pathwayConstraintsSetting?.maxPathway && 
				<p className='constraints'>{`Durée maximum de la formation : ${pathwayConstraints?.constraints.maxPathway || '-'}`}</p>
			}
			{pathwayConstraintsSetting?.minPathway && 
				<p className='constraints'>{`Durée minimum de la formation : ${pathwayConstraints?.constraints.minPathway || '-'}`}</p>
			}
			{pathwayConstraintsSetting?.maxSchoolSession && 
				<p className='constraints'>{`Durée maximum des sessions de formation : ${pathwayConstraints?.constraints.maxSchoolSession || '-'}`}</p>
			}
			{pathwayConstraintsSetting?.minSchoolSession && 
				<p className='constraints'>{`Durée minimum des sessions de formation : ${pathwayConstraints?.constraints.minSchoolSession || '-'}`}</p>
			}
			{pathwayConstraintsSetting?.maxCompanySession && 
				<p className='constraints'>{`Durée maximum des sessions d'entreprise : ${pathwayConstraints?.constraints.maxCompanySession || '-'}`}</p>
			}
			{pathwayConstraintsSetting?.minCompanySession && 
				<p className='constraints'>{`Durée minimum des sessions d'entreprise : ${pathwayConstraints?.constraints.minCompanySession || '-'}`}</p>
			}
			{pathwayConstraintsSetting?.schoolMandatory && 
				<p className='constraints'>{`Période en cours obligatoire : ${pathwayConstraints?.constraints.schoolMandatory || '-'}`}</p>
			}
			{pathwayConstraintsSetting?.companyMandatory && 
				<p className='constraints'>{`Période en entreprise obligatoire : ${pathwayConstraints?.constraints.companyMandatory || '-'}`}</p>
			}
		</div>
	)
}

const Module = ({id}) => {
	const {module, loading} = useGetModuleById(id)

	if (loading) return null

	return <li>{module.name ?? 'Module non trouvé'}</li>
}
