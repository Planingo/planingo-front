import React from 'react'
import { useSelector } from 'react-redux'
import { Select, DatePicker } from 'antd'
import { selectors } from '../../../../../../Account/store'
import { useProfessorConstraints } from '../../../../../Settings/Constraints/Hook/professorConstraints.hook'
import { useCity } from '../city.hook'
import '../constraints.scss'
import { Checkbox } from 'antd';

export const ProfessorConstraints = () => {
    const accountId = useSelector(selectors.accountId)
    const {data, loading} = useProfessorConstraints(accountId)

	const { data: cities, loading: citiesLoading } = useCity()

	const { Option } = Select

	if (loading || citiesLoading) return null

	function onChange(checkedValues) {
		console.log('checked = ', checkedValues);
	}
	
	const plainOptions = ['Matin', 'Après-midi'];

	return (
		<div>
			{data?.schoolPlace && 
				<div className='constraints'>
					<p>Lieu de la formation</p>
					<Select>
						{!loading &&
							cities.map(city => (
								<Option 
									placeholder="Selectionnez une ville" 
									key={city}
								>
										{city}
								</Option>
							))
						}
					</Select>
				</div>
			}
			{data?.intervention && 
				<div className='constraints'>
					<p>Interventions souhaitées</p>
					<div>
						<div className='day'>
							<label>Lundi</label>
							<Checkbox.Group 
								options={plainOptions} 
								defaultValue={['Matin', 'Après-midi']} 
								onChange={onChange} 
							/>
						</div>
						<div className='day'>
							<label>Mardi</label>
							<Checkbox.Group 
								options={plainOptions} 
								defaultValue={['Matin', 'Après-midi']}  
								onChange={onChange} 
							/>
						</div>
						<div className='day'>
							<label>Mercredi</label>
							<Checkbox.Group 
								options={plainOptions} 
								defaultValue={['Matin', 'Après-midi']} 
								onChange={onChange} 
							/>
						</div>
						<div className='day'>
							<label>Jeudi</label>
							<Checkbox.Group 
								options={plainOptions} 
								defaultValue={['Matin', 'Après-midi']} 
								onChange={onChange} 
							/>
						</div>
						<div className='day'>
							<label>Vendredi</label>
							<Checkbox.Group 
								options={plainOptions} 
								defaultValue={['Matin', 'Après-midi']}  
								onChange={onChange} 
							/>
						</div>
					</div>
				</div>
			}
		</div>
	)
}
