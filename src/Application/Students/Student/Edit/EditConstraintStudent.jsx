import React from 'react'
import './editConstraintStudent.scss'
import { Form, Select, DatePicker, InputNumber } from 'antd'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'
import { useCity } from '../Detail/Constraints/city.hook'
import { useGetStudentConstraints, useStudentConstraintsSetting } from '../../../Settings/Constraints/Hook/studentConstraints.hook'
import { useParams } from 'react-router'

const EditConstraintStudent = ({ setItem }) => {
	const { RangePicker } = DatePicker;
    const accountId = useSelector(selectors.accountId)
	const { id } = useParams()
	const dateFormat = 'DD/MM/YYYY';
    const {data: studentConstraintsSetting, loading: loadingStudentConstraintsSetting} = useStudentConstraintsSetting(accountId)
	const { data: studentConstraints, loading: loadingStudentConstraints } = useGetStudentConstraints(id)
	const { data: cities, loading: citiesLoading } = useCity()

	const { Option } = Select

	if (citiesLoading || loadingStudentConstraintsSetting || loadingStudentConstraints) return null

	return (
		<div className="addStudent">
			<Form
				initialValues={studentConstraints?.constraints}
				onValuesChange={(values) => {
					setItem((item) => ({ ...item, ...values }))
				}}
				layout="vertical"
				hideRequiredMark
			>
				{studentConstraintsSetting?.schoolPlace && 
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
				{studentConstraintsSetting?.maxSchool &&
					<Form.Item 
						name="maxSchool" 
						label="Volume d'heure maximum de la formation"
					>
						<InputNumber />
					</Form.Item>
				}
				{studentConstraintsSetting?.minSchool && 
					<Form.Item 
						name="minSchool" 
						label="Volume d'heure minimum de la formation"
					>
						<InputNumber />
					</Form.Item>
				}
				{studentConstraintsSetting?.maxPathway && 
					<Form.Item 
						name="maxPathway" 
						label="Durée maximum de la formation"
					>
						<InputNumber />
					</Form.Item>
				}
				{studentConstraintsSetting?.minPathway && 
					<Form.Item 
						name="minPathway" 
						label="Durée minimum de la formation"
					>
						<InputNumber />
					</Form.Item>
				}
				{studentConstraintsSetting?.maxSchoolSession && 
					<Form.Item 
						name="maxSchoolSession" 
						label="Durée maximum des sessions de formation"
					>
						<InputNumber />
					</Form.Item>
				}
				{studentConstraintsSetting?.minSchoolSession && 
					<Form.Item 
						name="minSchoolSession" 
						label="Durée minimum des sessions de formation"
					>
						<InputNumber />
					</Form.Item>
				}
				{studentConstraintsSetting?.maxCompanySession && 
					<Form.Item 
						name="maxCompanySession" 
						label="Durée maximum des sessions d'entreprise"
					>
						<InputNumber />	
					</Form.Item>
				}
				{studentConstraintsSetting?.minCompanySession &&
					<Form.Item 
						name="minCompanySession" 
						label="Durée minimum des sessions d'entreprise"
					>
						<InputNumber />
					</Form.Item>
				}
				{studentConstraintsSetting?.schoolMandatory && 
					<Form.Item 
						name="schoolMandatory" 
						label="Période en cours obligatoire"
					>
						<RangePicker
							format={dateFormat}
						/>
					</Form.Item>
				}
				{studentConstraintsSetting?.companyMandatory && 
					<Form.Item 
						name="companyMandatory" 
						label="Période en entreprise obligatoire"
					>
						<RangePicker
							format={dateFormat}
						/>
					</Form.Item>
				}
			</Form>
		</div>
	)
}

export default EditConstraintStudent
