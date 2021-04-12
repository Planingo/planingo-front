import React from 'react'
import { useSelector } from 'react-redux'
import { Select, DatePicker } from 'antd'
import { selectors } from '../../../../../Account/store'
import { useStudentConstraints } from '../../../../Settings/Constraints/Hook/studentConstraints.hook'
import { useCity } from './city.hook'
import './constraints.scss'

const Constraints = () => {
    const accountId = useSelector(selectors.accountId)
    const {data, loading} = useStudentConstraints(accountId)

	const { cities } = useCity()

	const { Option } = Select

	if (loading) return null

	const { RangePicker } = DatePicker;

	const dateFormat = 'DD/MM/YYYY';

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
			{data?.maxSchool && 
				<div className='constraints'>
					<p>Volume d'heure maximum de la formation</p>
				</div>
			}
			{data?.minSchool && 
				<div className='constraints'>
					<p>Volume d'heure minimum de la formation</p>
				</div>
			}
			{data?.maxPathway && 
				<div className='constraints'>
					<p>Durée maximum de la formation</p>
				</div>
			}
			{data?.minPathway && 
				<div className='constraints'>
					<p>Durée minimum de la formation</p>
				</div>
			}
			{data?.maxSchoolSession && 
				<div className='constraints'>
					<p>Durée maximum des sessions de formation</p>
				</div>
			}
			{data?.minSchoolSession && 
				<div className='constraints'>
					<p>Durée minimum des sessions de formation</p>
				</div>
			}
			{data?.maxCompanySession && 
				<div className='constraints'>
					<p>Durée maximum des sessions d'entreprise</p>
				</div>
			}
			{data?.minCompanySession && 
				<div className='constraints'>
					<p>Durée minimum des sessions d'entreprise</p>
				</div>
			}
			{data?.schoolMandatory && 
				<div className='constraints'>
					<p>Période en cours obligatoire</p>
					<RangePicker
						format={dateFormat}
					/>
				</div>
			}
			{data?.companyMandatory && 
				<div className='constraints'>
					<p>Période en entreprise obligatoire</p>
					<RangePicker
						format={dateFormat}
					/>
				</div>
			}
		</div>
	)
}

export default Constraints
