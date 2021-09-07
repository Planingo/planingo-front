import React, { useState } from 'react'
import './addCalendar.scss'
import { Form, Select } from 'antd'
import { Switch } from '@planingo/ditto'
import { useGetAllPathways } from '../../../Pathways/pathways.hooks'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { useGetAllStudents } from '../../../Students/students.hooks'

const AddCalendar = ({setItem}) => {
	const { Option } = Select

	const {data: getAllPathways, loading: getAllPathwaysLoading} = useGetAllPathways()
	const {data: getAllStudents, loading: getAllStudentsLoading} = useGetAllStudents()

	const [generateCalendarForPathway, setGenerateCalendarForPathway] = useState(true)

	if(getAllPathwaysLoading || getAllStudentsLoading) return null

	return (
		<div className="addStudent">
			<Switch		
				checkedChildren={<CheckOutlined />}
				unCheckedChildren={<CloseOutlined />}
				checked={generateCalendarForPathway}
				onChange={() => setGenerateCalendarForPathway(!generateCalendarForPathway)}
			/>
			<Form 
				layout="vertical" 
				hideRequiredMark
				onValuesChange={(values) => {
					setItem(values)
			}}>
				{generateCalendarForPathway && 
					<Form.Item
						name="pathwayId"
						label="Formation"
					>
						<Select 
							showSearch 
							filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						>
							{getAllPathways.pathway.map(p => <Option key={p.id} value={p.id}>{p.name}</Option>)}
						</Select>	
					</Form.Item>
				}
				{!generateCalendarForPathway && 
					<Form.Item
						name="studentId"
						label="Étudiant"
					>
						<Select
							showSearch 
							filterOption={(input, option) => option.children.join('').toLowerCase().indexOf(input.toLowerCase()) >= 0}
						>
							{getAllStudents.student.map(s => <Option key={s.id} value={s.id}>{s.firstName} {s.lastName}</Option>)}
						</Select>
					</Form.Item>
				}
			</Form>
		</div>
	)
}

export default AddCalendar
