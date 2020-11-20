import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Students from './Students/Students'
import './application.scss'
import Navigation from './Navigation/Navigation'
import Professors from './Professors/Professors'
import Calendars from './Calendars/Calendars'
import { useIntl } from 'react-intl'
import Pathways from './Pathways/Pathways'
import Modules from './Modules/Modules'
import Settings from './Settings/Settings'
import Lessons from './Lessons/Lessons'
import Rooms from './Rooms/Rooms'
import Companies from './Companies/Companies'
import {
	AppstoreOutlined,
	UnorderedListOutlined,
	UserOutlined,
	TeamOutlined,
	ExperimentOutlined,
	TagsOutlined,
	TagOutlined,
	ShopOutlined,
	WifiOutlined,
	EditOutlined,
} from '@ant-design/icons'
import DetailPathway from './Pathways/Pathway/Detail/DetailPathway'
import DetailStudent from './Students/Student/Detail/DetailStudent'
import DetailProfessor from './Professors/Professor/Detail/DetailProfessor'
import DetailModule from './Modules/Module/Detail/DetailModule'
import DetailLesson from './Lessons/Lesson/Detail/DetailLesson'
import DetailRoom from './Rooms/Room/Detail/DetailRoom'
import DetailCompany from './Companies/Company/Detail/DetailCompany'
import StudentsList from './Students/StudentsList'
import Search from '../Components/Search/search'
import Refinement from '../Components/Refinement/refinement'
import AddItem from './Layout/Add/AddItem'
import AddStudent from './Students/Student/Add/AddStudent'
import AddProfessor from './Professors/Professor/Add/AddProfessor'
import AddPathway from './Pathways/Pathway/Add/AddPathway'
import AddModule from './Modules/Module/Add/AddModule'
import AddRoom from './Rooms/Room/Add/AddRoom'
import AddCour from './Lessons/Lesson/Add/AddLesson'
import AddCompany from './Companies/Company/Add/AddCompany'
import { useAddStudent } from './Students/students.hooks'

const Application = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addStudent, { loading: addingStudent }] = useAddStudent()

	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)

	return (
		<div className="application">
			<Navigation />
			<div className="body">
				<div className="middle">
					<Switch>
						<Route path="/students/:id">
							<Refinement
								backTo="students"
								FirstActionItem={AddItem}
								FirstActionIcon={UserOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.student' })}
								FirstForm={AddStudent}
								onFirstAction={addStudent}
								firstActioning={addingStudent}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddStudent}
								onSecondAction={addStudent}
								secondActioning={addingStudent}
							/>
							<DetailStudent />
						</Route>
						<Route path="/professors/:id">
							<Refinement
								backTo="professors"
								FirstActionItem={AddItem}
								FirstActionIcon={TeamOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.professor' })}
								FirstForm={AddStudent}
								onFirstAction={addStudent}
								firstActioning={addingStudent}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddStudent}
								onSecondAction={addStudent}
								secondActioning={addingStudent}
							/>
							<DetailProfessor />
						</Route>
						<Route path="/calendars/:id">
							<Refinement
								backTo="calendars"
								FirstActionItem={AddItem}
								FirstActionIcon={UserOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.calendar' })}
								FirstForm={AddStudent}
								onFirstAction={addStudent}
								firstActioning={addingStudent}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddStudent}
								onSecondAction={addStudent}
								secondActioning={addingStudent}
							/>
							<DetailPathway />
						</Route>
						<Route path="/pathways/:id">
							<Refinement
								backTo="pathways"
								FirstActionItem={AddItem}
								FirstActionIcon={ExperimentOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.pathway' })}
								FirstForm={AddStudent}
								onFirstAction={addStudent}
								firstActioning={addingStudent}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddStudent}
								onSecondAction={addStudent}
								secondActioning={addingStudent}
							/>
							<DetailPathway />
						</Route>
						<Route path="/modules/:id">
							<Refinement
								backTo="modules"
								FirstActionItem={AddItem}
								FirstActionIcon={TagsOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.module' })}
								FirstForm={AddStudent}
								onFirstAction={addStudent}
								firstActioning={addingStudent}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddStudent}
								onSecondAction={addStudent}
								secondActioning={addingStudent}
							/>
							<DetailModule />
						</Route>
						<Route path="/lessons/:id">
							<Refinement
								backTo="lessons"
								FirstActionItem={AddItem}
								FirstActionIcon={TagOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.lesson' })}
								FirstForm={AddStudent}
								onFirstAction={addStudent}
								firstActioning={addingStudent}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddStudent}
								onSecondAction={addStudent}
								secondActioning={addingStudent}
							/>
							<DetailLesson />
						</Route>
						<Route path="/rooms/:id">
							<Refinement
								backTo="rooms"
								FirstActionItem={AddItem}
								FirstActionIcon={ShopOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.room' })}
								FirstForm={AddStudent}
								onFirstAction={addStudent}
								firstActioning={addingStudent}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddStudent}
								onSecondAction={addStudent}
								secondActioning={addingStudent}
							/>
							<DetailRoom />
						</Route>
						<Route path="/companies/:id">
							<Refinement
								backTo="companies"
								FirstActionItem={AddItem}
								FirstActionIcon={WifiOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.company' })}
								FirstForm={AddStudent}
								onFirstAction={addStudent}
								firstActioning={addingStudent}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddStudent}
								onSecondAction={addStudent}
								secondActioning={addingStudent}
							/>
							<DetailCompany />
						</Route>
						<Route path="/students">
							<div className="header">
								<Search placeholder="Rechercher un étudiant" />
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={UserOutlined}
									firstActionText={intl.formatMessage({ id: 'add.student' })}
									FirstForm={AddStudent}
									onFirstAction={addStudent}
									firstActioning={addingStudent}
								/>
							</div>
							{!isGrid ? (
								<StudentsList
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							) : (
								<Students
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							)}
						</Route>
						<Route path="/professors">
							<div className="header">
								<Search placeholder="Rechercher un professeur" />
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={TeamOutlined}
									firstActionText={intl.formatMessage({ id: 'add.professor' })}
									FirstForm={AddProfessor}
									onFirstAction={addStudent}
									firstActioning={addingStudent}
								/>
							</div>
							{!isGrid ? (
								<StudentsList
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							) : (
								<Professors
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							)}
						</Route>
						<Route path="/pathways">
							<div className="header">
								<Search placeholder="Rechercher une formation" />
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={ExperimentOutlined}
									firstActionText={intl.formatMessage({ id: 'add.pathway' })}
									FirstForm={AddPathway}
									onFirstAction={addStudent}
									firstActioning={addingStudent}
								/>
							</div>
							{!isGrid ? (
								<StudentsList
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							) : (
								<Pathways
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							)}
						</Route>
						<Route path="/modules">
							<div className="header">
								<Search placeholder="Rechercher un module" />
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={TagsOutlined}
									firstActionText={intl.formatMessage({ id: 'add.module' })}
									FirstForm={AddModule}
									onFirstAction={addStudent}
									firstActioning={addingStudent}
								/>
							</div>
							{!isGrid ? (
								<StudentsList
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							) : (
								<Modules
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							)}
						</Route>
						<Route path="/lessons">
							<div className="header">
								<Search placeholder="Rechercher un cours" />
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={TagOutlined}
									firstActionText={intl.formatMessage({ id: 'add.lesson' })}
									FirstForm={AddCour}
									onFirstAction={addStudent}
									firstActioning={addingStudent}
								/>
							</div>
							{!isGrid ? (
								<StudentsList
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							) : (
								<Lessons
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							)}
						</Route>
						<Route path="/rooms">
							<div className="header">
								<Search placeholder="Rechercher une salle" />
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={ShopOutlined}
									firstActionText={intl.formatMessage({ id: 'add.room' })}
									FirstForm={AddRoom}
									onFirstAction={addStudent}
									firstActioning={addingStudent}
								/>
							</div>
							{isGrid ? (
								<StudentsList
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							) : (
								<Rooms
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							)}
						</Route>
						<Route path="/companies">
							<div className="header">
								<Search placeholder="Rechercher une entreprise" />
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={WifiOutlined}
									firstActionText={intl.formatMessage({ id: 'add.company' })}
									FirstForm={AddCompany}
									onFirstAction={addStudent}
									firstActioning={addingStudent}
								/>
							</div>
							{!isGrid ? (
								<StudentsList
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							) : (
								<Companies
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									options={options}
								/>
							)}
						</Route>
						<Route path="/calendars">
							<Calendars />
						</Route>
						<Route path="/settings">
							<Settings />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default Application
