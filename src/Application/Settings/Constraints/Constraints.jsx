import React from 'react'
import './constraints.scss'
import { Collapse } from 'antd'
import { Spin } from '@planingo/ditto'
import { useIntl } from 'react-intl'
import { 
	StudentConstraints, 
	ProfessorContraints, 
	LessonContraints, 
	ModuleContraints, 
	PathwayContraints, 
	RoomConstraints,
	CompanyContraints,
} from './Componants'
import { useSelector } from 'react-redux'
import { useFindSettingsByAccountId } from '../../../Tools/MagicBook/Settings/settings.hooks'
import { selectors } from '../../../Account/store'

const Constraints = () => {
	const { Panel } = Collapse;
	const intl = useIntl()

	const { settings, loading } = useFindSettingsByAccountId(
		useSelector(selectors.accountId),
	)
	function callback(key) {
		console.log(key);
	}	  

	if(loading) return <Spin/>

	return (
		<div className="constraints">
			<Collapse defaultActiveKey={['1']} onChange={callback}>
				{settings.student && 
					<Panel header={intl.formatMessage({
							id: 'settings.constraints.student',
						})} key="1">
						<StudentConstraints />
					</Panel>
				}
				{settings.professor && 
					<Panel header={intl.formatMessage({
						id: 'settings.constraints.professor',
					})} key="2"><ProfessorContraints/></Panel>
				}
			{settings.lesson && 
				<Panel header={intl.formatMessage({
						id: 'settings.constraints.lesson',
					})} key="3"><LessonContraints /></Panel>
			}
			{settings.module && 
				<Panel header={intl.formatMessage({
						id: 'settings.constraints.modules',
					})} key="4"><ModuleContraints /></Panel>
			}
			{settings.pathway && 
				<Panel header={intl.formatMessage({
						id: 'settings.constraints.pathway',
					})} key="5"><PathwayContraints /></Panel>
			}
			{settings.room && 
				<Panel header={intl.formatMessage({
						id: 'settings.constraints.room',
					})} key="6"><RoomConstraints /></Panel>
	
			}
			{settings.company && 
				<Panel header={intl.formatMessage({
						id: 'settings.constraints.companies',
					})} key="7"><CompanyContraints /></Panel>
			}
			</Collapse>
		</div>
	)
}

export default Constraints
