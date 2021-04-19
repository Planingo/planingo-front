import React from 'react'
import './constraints.scss'
import { Collapse } from 'antd'
import { Spin, Switch } from '@planingo/ditto'
import { useIntl } from 'react-intl'
import { 
	StudentConstraints, 
	ProfessorContraints, 
	LessonContraints, 
	ModuleContraints, 
	PathwayConstraints, 
	RoomConstraints,
	CompanyContraints,
} from './Componants'
import { useSelector } from 'react-redux'
import { useFindSettingsByAccountId } from '../../../Tools/MagicBook/Settings/settings.hooks'
import { selectors } from '../../../Account/store'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useCompanyConstraints, useUpdateCompanyConstraints } from './Hook/companyConstraints.hook'
import { useStudentConstraintsSetting, useUpdateStudentConstraints } from './Hook/studentConstraints.hook'
import { useProfessorConstraintsSetting, useUpdateProfessorConstraints } from './Hook/professorConstraints.hook'
import { useRoomConstraints, useUpdateRoomConstraints } from './Hook/roomConstraints.hook'
import { useLessonConstraintsSetting, useUpdateLessonConstraints } from './Hook/lessonConstraints.hook'
import { useModuleConstraintsSetting, useUpdateModuleConstraints } from './Hook/moduleConstraints.hook'
import { usePathwayConstraints, useUpdatePathwayConstraints } from './Hook/pathwayConstraints.hook'

const Constraints = () => {
	const { Panel } = Collapse;
	const intl = useIntl()

	const { settings, loading } = useFindSettingsByAccountId(
		useSelector(selectors.accountId),
	)
	function callback(key) {
	}	  

    const accountId = useSelector(selectors.accountId)
    
    const { data: studentData, loading: studentLoading } = useStudentConstraintsSetting(accountId)
    const { data: professorData, loading: professorLoading } = useProfessorConstraintsSetting(accountId)
    const { data: roomData, loading: roomLoading } = useRoomConstraints(accountId)
    const { data: companyData, loading: companyLoading } = useCompanyConstraints(accountId)
    const { data: lessonData, loading: lessonLoading } = useLessonConstraintsSetting(accountId)
    const { data: moduleData, loading: moduleLoading } = useModuleConstraintsSetting(accountId)
    const { data: pathwayData, loading: pathwayLoading } = usePathwayConstraints(accountId)
	
    const [updateStudentConstraints] = useUpdateStudentConstraints()
    const [updateProfessorConstraints] = useUpdateProfessorConstraints()
    const [updateRoomConstraints] = useUpdateRoomConstraints()
    const [updateCompanyConstraints] = useUpdateCompanyConstraints()
    const [updateLessonConstraints] = useUpdateLessonConstraints()
    const [updateModuleConstraints] = useUpdateModuleConstraints()
    const [updatePathwayConstraints] = useUpdatePathwayConstraints()

    const onUpdate = (toUpdate, data, checked) => {
		const input = Object.fromEntries( 
			Object.entries(data)
			.filter(([, value]) => value === Boolean(value))
			.map(([key, value]) => [key, checked])
		)
		if (toUpdate === "student") updateStudentConstraints(accountId, input)
		else if (toUpdate === "professor") updateProfessorConstraints(accountId, input)
		else if (toUpdate === "room") updateRoomConstraints(accountId, input)
		else if (toUpdate === "company") updateCompanyConstraints(accountId, input)
		else if (toUpdate === "lesson") updateLessonConstraints(accountId, input)
		else if (toUpdate === "module") updateModuleConstraints(accountId, input)
		else if (toUpdate === "pathway") updatePathwayConstraints(accountId, input)
	}

	if(loading || 
		studentLoading || 
		professorLoading || 
		roomLoading || 
		companyLoading ||
		lessonLoading ||
		moduleLoading ||
		pathwayLoading
	) return <Spin/>

	return (
		<div className="constraints">
			<Collapse defaultActiveKey={['1']} onChange={callback}>
				{settings.student && 
					<Panel 
						extra={
							<Switch 
								checkedChildren={<CheckOutlined />}
								unCheckedChildren={<CloseOutlined />}
								checked={Object.values(studentData).includes(true)}
								onChange={(checked, e) =>
									{
										e.stopPropagation() 
										onUpdate('student', studentData, checked)
									}
								}
							/>
						}
						header={intl.formatMessage({
							id: 'settings.constraints.student',
						})} key="1"
					>
						<StudentConstraints />
					</Panel>
				}
				{settings.professor && 
					<Panel  
					extra={
						<Switch 
							checkedChildren={<CheckOutlined />}
							unCheckedChildren={<CloseOutlined />}
							checked={Object.values(professorData).includes(true)}
							onChange={(checked, e) =>
								{
									e.stopPropagation() 
									onUpdate('professor', professorData, checked)
								}
							}
						/>
					}
					header={intl.formatMessage({
						id: 'settings.constraints.professor',
					})} key="2">
						<ProfessorContraints/>
					</Panel>
				}
				{settings.lesson && 
					<Panel 
						extra={
							<Switch 
								checkedChildren={<CheckOutlined />}
								unCheckedChildren={<CloseOutlined />}
								checked={Object.values(lessonData).includes(true)}
								onChange={(checked, e) =>
									{
										e.stopPropagation() 
										onUpdate('lesson', lessonData, checked)
									}
								}
							/>
						}
						header={intl.formatMessage({
								id: 'settings.constraints.lesson',
						})} key="3"
					>
						<LessonContraints />
					</Panel>
				}
				{settings.module && 
					<Panel 
						extra={
							<Switch 
								checkedChildren={<CheckOutlined />}
								unCheckedChildren={<CloseOutlined />}
								checked={Object.values(moduleData).includes(true)}
								onChange={(checked, e) =>
									{
										e.stopPropagation() 
										onUpdate('module', moduleData, checked)
									}
								}
							/>
						}
						header={intl.formatMessage({
								id: 'settings.constraints.modules',
						})} key="4"
					>
						<ModuleContraints />
					</Panel>
				}
				{settings.pathway && 
					<Panel 
						extra={
							<Switch 
								checkedChildren={<CheckOutlined />}
								unCheckedChildren={<CloseOutlined />}
								checked={Object.values(pathwayData).includes(true)}
								onChange={(checked, e) =>
									{
										e.stopPropagation() 
										onUpdate('pathway', pathwayData, checked)
									}
								}
							/>
						}
						header={intl.formatMessage({
								id: 'settings.constraints.pathway',
						})} key="5"
					>
						<PathwayConstraints />
					</Panel>
				}
				{settings.room && 
					<Panel 
						extra={
							<Switch 
								checkedChildren={<CheckOutlined />}
								unCheckedChildren={<CloseOutlined />}
								checked={Object.values(roomData).includes(true)}
								onChange={(checked, e) =>
									{
										e.stopPropagation() 
										onUpdate('room', roomData, checked)
									}
								}
							/>
						}
						header={intl.formatMessage({
								id: 'settings.constraints.room',
						})} key="6"
					>
						<RoomConstraints />
					</Panel>
		
				}
				{settings.company && 
					<Panel 
						extra={
							<Switch 
								checkedChildren={<CheckOutlined />}
								unCheckedChildren={<CloseOutlined />}
								checked={Object.values(companyData).includes(true)}
								onChange={(checked, e) =>
									{
										e.stopPropagation() 
										onUpdate('company', companyData, checked)
									}
								}
							/>
						}
						header={intl.formatMessage({
							id: 'settings.constraints.companies',
						})} key="7"
					>
						<CompanyContraints />
					</Panel>
				}
			</Collapse>
		</div>
	)
}

export default Constraints
