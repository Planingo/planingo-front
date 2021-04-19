import React from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../../Account/store'
import { useGetModuleConstraints, useModuleConstraintsSetting } from '../../../../Settings/Constraints/Hook/moduleConstraints.hook'
import './constraints.scss'
import { useParams } from 'react-router'
import { useGetModuleById } from '../../../modules.hooks'

export const ModuleConstraints = () => {
    const accountId = useSelector(selectors.accountId)
	const { id } = useParams()
    const {data: moduleConstraintsSetting, loading: loadingModuleConstraintsSetting} = useModuleConstraintsSetting(accountId)
	const { data: moduleConstraints, loading: loadingModuleConstraints } = useGetModuleConstraints(id)

	if (loadingModuleConstraintsSetting || loadingModuleConstraints) return null

	return (
		<div>
			{moduleConstraintsSetting?.moduleMandatory &&
				<>
					<p className='constraints'>Liste des modules obligatoires : {!moduleConstraints?.constraints?.moduleMandatory && '-'}</p>
					{moduleConstraints?.constraints?.moduleMandatory && 
						<ul>
							{moduleConstraints.constraints.moduleMandatory.map(module => <Module key={module} id={module} />)}
						</ul>
					}
				</>
			}
			{moduleConstraintsSetting?.moduleOptionnal && 
				<>
					<p className='constraints'>Liste des modules optionnels : {!moduleConstraints?.constraints?.moduleOptionnal && '-'}</p>
					{moduleConstraints?.constraints?.moduleOptionnal && 
						<ul>
							{moduleConstraints?.constraints?.moduleOptionnal?.map(module => <Module key={module} id={module} />)}
						</ul>
					}
				</>
			}
			{moduleConstraintsSetting?.breakable && 
					<p className='constraints'>Module sécable : {moduleConstraints?.constraints.breakable ? "oui" : 'non'}</p>
			}
		</div>
	)
}


const Module = ({id}) => {
	const {module, loading} = useGetModuleById(id)

	if (loading) return null

	return <li>{module.name ?? 'Module non trouvé'}</li>
}