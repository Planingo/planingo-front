import React from 'react'
import './editConstraintCompany.scss'
import { DatePicker, Form, InputNumber } from 'antd'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'
import { useGetCompanyConstraints, useCompanyConstraintsSetting } from '../../../Settings/Constraints/Hook/companyConstraints.hook'
import { useParams } from 'react-router'

const EditConstraintCompany = ({ setItem }) => {

	const { RangePicker } = DatePicker;
	const dateFormat = 'DD/MM/YYYY';

    const accountId = useSelector(selectors.accountId)
	const { id } = useParams()
    const { data: companyConstraintsSetting, loading: loadingCompanyConstraintsSetting} = useCompanyConstraintsSetting(accountId)
	const { data: companyConstraints, loading: loadingCompanyConstraints } = useGetCompanyConstraints(id)

	if (loadingCompanyConstraintsSetting || loadingCompanyConstraints) return null

	return (
		<div className="editCompany">
			<Form
				initialValues={companyConstraints?.constraints}
				onValuesChange={(values) => {
					setItem((item) => ({ ...item, ...values }))
				}}
				layout="vertical"
				hideRequiredMark
			>
				{companyConstraintsSetting?.maxSchoolSession && 
					<Form.Item 
						name="maxSchoolSession" 
						label="Durée maximum des sessions d'entreprise"
					>
						<InputNumber />	
					</Form.Item>
				}
				{companyConstraintsSetting?.minSchoolSession &&
					<Form.Item 
						name="minSchoolSession" 
						label="Durée minimum des sessions d'entreprise"
					>
						<InputNumber />
					</Form.Item>
				}
				{companyConstraintsSetting?.maxCompanySession && 
						<Form.Item 
							name="maxCompanySession" 
							label="Durée maximum des sessions d'entreprise"
						>
							<InputNumber />	
						</Form.Item>
					}
					{companyConstraintsSetting?.minCompanySession &&
						<Form.Item 
							name="minCompanySession" 
							label="Durée minimum des sessions d'entreprise"
						>
							<InputNumber />
						</Form.Item>
					}
				{companyConstraintsSetting?.schoolMandatory && 
					<Form.Item 
						name="schoolMandatory" 
						label="Période en cours obligatoire"
					>
						<RangePicker
							format={dateFormat}
						/>
					</Form.Item>
				}
				{companyConstraintsSetting?.companyMandatory && 
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

export default EditConstraintCompany
