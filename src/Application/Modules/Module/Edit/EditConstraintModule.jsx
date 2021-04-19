import React from 'react'
import './editConstraintModule.scss'
import { Form, Select } from 'antd'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'
import { useGetModuleConstraints, useModuleConstraintsSetting } from '../../../Settings/Constraints/Hook/moduleConstraints.hook'
import { useParams } from 'react-router'
import { Switch } from '@planingo/ditto'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { useGetAllModules } from '../../modules.hooks'

const EditConstraintModule = ({ setItem }) => {

	const { Option } = Select;

    const accountId = useSelector(selectors.accountId)
	const { id } = useParams()
	const {data: getAllModules, loading: getAllModulesLoading} = useGetAllModules()
    const { data: moduleConstraintsSetting, loading: loadingModuleConstraintsSetting} = useModuleConstraintsSetting(accountId)
	const { data: moduleConstraints, loading: loadingModuleConstraints } = useGetModuleConstraints(id)

	if (loadingModuleConstraintsSetting || loadingModuleConstraints || getAllModulesLoading) return null

	return (
		<div className="editModule">
			<Form
				initialValues={moduleConstraints?.constraints}
				onValuesChange={(values) => {
					setItem((item) => ({ ...item, ...values }))
				}}
				layout="vertical"
				hideRequiredMark
			>
			{moduleConstraintsSetting?.moduleMandatory && 
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
			{moduleConstraintsSetting?.moduleOptionnal && 
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
			{moduleConstraintsSetting?.breakable && 
				<Form.Item 
					name="breakable" 
					label="Module sécable"
				>
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
					/>
				</Form.Item>
			}
			</Form>
		</div>
	)
}

export default EditConstraintModule
