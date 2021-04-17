import React from 'react'
import './editConstraintProfessor.scss'
import { Form, Select, Checkbox } from 'antd'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'
import { useGetProfessorConstraints, useProfessorConstraintsSetting } from '../../../Settings/Constraints/Hook/professorConstraints.hook'
import { useParams } from 'react-router'
import { useCity } from '../../../Cities/city.hook'

const EditConstraintProfessor = ({ setItem }) => {
    const accountId = useSelector(selectors.accountId)
	const { id } = useParams()
    const {data: professorConstraintsSetting, loading: loadingProfessorConstraintsSetting} = useProfessorConstraintsSetting(accountId)
	const { data: professorConstraints, loading: loadingProfessorConstraints } = useGetProfessorConstraints(id)
	const { data: cities, loading: citiesLoading } = useCity()

	const { Option } = Select
	
	const plainOptions = ['Matin', 'Après-midi'];

	if (citiesLoading || loadingProfessorConstraintsSetting || loadingProfessorConstraints) return null

	return (
		<div className="editProfessor">
			<Form
				initialValues={professorConstraints?.constraints}
				onValuesChange={(values) => {
					setItem((item) => ({ ...item, ...values }))
				}}
				layout="vertical"
				hideRequiredMark
			>
				{professorConstraintsSetting?.intervention && 
					<Form.Item 
						name="schoolPlace" 
						label="Lieu de la formation"
					>
						<Select>
							{!citiesLoading &&
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
					</Form.Item>
				}
				{professorConstraintsSetting?.intervention &&
					<>
						<p>Interventions souhaitées</p>
						<Form.Item 
							name="interventionMonday" 
							label="Lundi"
						>
							<Checkbox.Group 
								options={plainOptions} 
							/>
						</Form.Item>
						<Form.Item 
							name="interventionTuesday" 
							label="Mardi"
						>
							<Checkbox.Group 
								options={plainOptions} 
							/>
						</Form.Item>
						<Form.Item 
							name="interventionWednesday" 
							label="Mercredi"
						>
							<Checkbox.Group 
								options={plainOptions} 
							/>
						</Form.Item>
						<Form.Item 
							name="interventionThursday" 
							label="Jeudi"
						>
							<Checkbox.Group 
								options={plainOptions} 
							/>
						</Form.Item>
						<Form.Item 
							name="interventionFriday" 
							label="Vendredi"
						>
							<Checkbox.Group 
								options={plainOptions} 
							/>
						</Form.Item>
					</>
				}
			</Form>
		</div>
	)
}

export default EditConstraintProfessor
