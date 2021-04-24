import React from 'react'
import './editConstraintPathway.scss'
import { Form, Select, DatePicker, InputNumber } from 'antd'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { selectors } from '../../../../../Account/store'
import { useCity } from '../../../../Cities/city.hook'
import { useGetPathwayConstraints, usePathwayConstraintsSetting } from '../../../../Settings/Constraints/Hook/pathwayConstraints.hook'
import { useGetAllModules } from '../../../../Modules/modules.hooks'

const EditConstraintPathway = ({ setItem }) => {
	const { RangePicker } = DatePicker;
    const accountId = useSelector(selectors.accountId)
	const { id } = useParams()
	const dateFormat = 'DD/MM/YYYY';
    const {data: pathwayConstraintsSetting, loading: loadingPathwayConstraintsSetting} = usePathwayConstraintsSetting(accountId)
	const { data: pathwayConstraints, loading: loadingPathwayConstraints } = useGetPathwayConstraints(id)
	const { data: getAllModules, loading: moduleLoading} = useGetAllModules()
	const { data: cities, loading: citiesLoading } = useCity()

	const { Option } = Select

	if (citiesLoading || loadingPathwayConstraintsSetting || loadingPathwayConstraints || moduleLoading) return null

	return (
		<div className="addPathway">
			<Form
				initialValues={pathwayConstraints?.constraints}
				onValuesChange={(values) => {
					setItem((item) => ({ ...item, ...values }))
				}}
				layout="vertical"
				hideRequiredMark
			>
				{pathwayConstraintsSetting?.moduleMandatory && 
				<Form.Item 
					name="moduleMandatory" 
					label="Module obligatoire"
				>
					<Select
						mode="multiple"
						allowClear
					>
						{getAllModules.module.map(m =>
							<Option key={m.id}>{m.name}</Option>
						)}
					</Select>
				</Form.Item>
			}
			{pathwayConstraintsSetting?.moduleOptionnal && 
				<Form.Item 
					name="moduleOptionnal" 
					label="Module optionnel"
				>
					<Select
						mode="multiple"
						allowClear
					>
						{getAllModules.module.map(m =>
							<Option key={m.id}>{m.name}</Option>
						)}
					</Select>
				</Form.Item>
			}
				{pathwayConstraintsSetting?.schoolPlace && 
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
				{pathwayConstraintsSetting?.maxSchool &&
					<Form.Item 
						name="maxSchool" 
						label="Volume d'heure maximum de la formation"
					>
						<InputNumber />
					</Form.Item>
				}
				{pathwayConstraintsSetting?.minSchool && 
					<Form.Item 
						name="minSchool" 
						label="Volume d'heure minimum de la formation"
					>
						<InputNumber />
					</Form.Item>
				}
				{pathwayConstraintsSetting?.maxPathway && 
					<Form.Item 
						name="maxPathway" 
						label="Durée maximum de la formation"
					>
						<InputNumber />
					</Form.Item>
				}
				{pathwayConstraintsSetting?.minPathway && 
					<Form.Item 
						name="minPathway" 
						label="Durée minimum de la formation"
					>
						<InputNumber />
					</Form.Item>
				}
				{pathwayConstraintsSetting?.maxSchoolSession && 
					<Form.Item 
						name="maxSchoolSession" 
						label="Durée maximum des sessions de formation"
					>
						<InputNumber />
					</Form.Item>
				}
				{pathwayConstraintsSetting?.minSchoolSession && 
					<Form.Item 
						name="minSchoolSession" 
						label="Durée minimum des sessions de formation"
					>
						<InputNumber />
					</Form.Item>
				}
				{pathwayConstraintsSetting?.maxCompanySession && 
					<Form.Item 
						name="maxCompanySession" 
						label="Durée maximum des sessions d'entreprise"
					>
						<InputNumber />	
					</Form.Item>
				}
				{pathwayConstraintsSetting?.minCompanySession &&
					<Form.Item 
						name="minCompanySession" 
						label="Durée minimum des sessions d'entreprise"
					>
						<InputNumber />
					</Form.Item>
				}
				{pathwayConstraintsSetting?.schoolMandatory && 
					<Form.Item 
						name="schoolMandatory" 
						label="Période en cours obligatoire"
					>
						<RangePicker
							format={dateFormat}
						/>
					</Form.Item>
				}
				{pathwayConstraintsSetting?.companyMandatory && 
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

export default EditConstraintPathway
