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
import AddPathway from './Pathways/Pathway/Add/AddPathway'
import AddModule from './Modules/Module/Add/AddModule'
import AddRoom from './Rooms/Room/Add/AddRoom'
import AddCour from './Lessons/Lesson/Add/AddLesson'
import AddCompany from './Companies/Company/Add/AddCompany'
import { useAddStudent, useEditStudent } from './Students/students.hooks'
import {
	useAddProfessor,
	useEditProfessor,
} from './Professors/professors.hooks'
import AddProfessor from './Professors/Professor/Add/AddProfessor'
import ProfessorsList from './Professors/ProfessorsList'
import {
	useAddCompany,
	useEditCompany,
} from './Companies/companies.hooks'
import CompaniesList from './Companies/CompaniesList'
import { useAddPathway, useEditPathway } from './Pathways/pathways.hooks'
import PathwaysList from './Pathways/PathwaysList'
import { useAddLesson, useEditLesson } from './Lessons/lessons.hooks'
import LessonsList from './Lessons/LessonsList'
import ModulesList from './Modules/ModulesList'
import { useAddModule, useEditModule } from './Modules/modules.hooks'
import { useAddRoom, useEditRoom } from './Rooms/rooms.hooks'
import RoomsList from './Rooms/RoomsList'
import AddLesson from './Lessons/Lesson/Add/AddLesson'

const Application = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addStudent, { loading: addingStudent }] = useAddStudent()
	const [editStudent, { loading: editingStudent }] = useEditStudent()

	const [addProfessor, { loading: addingProfessor }] = useAddProfessor()
	const [editProfessor, { loading: editingProfessor }] = useEditProfessor()

	const [addCompany, { loading: addingCompany }] = useAddCompany()
	const [editCompany, { loading: editingCompany }] = useEditCompany()

	const [addPathway, { loading: addingPathway }] = useAddPathway()
	const [editPathway, { loading: editingPathway }] = useEditPathway()

	const [addLesson, { loading: addingLesson }] = useAddLesson()
	const [editLesson, { loading: editingLesson }] = useEditLesson()

	const [addModule, { loading: addingModule }] = useAddModule()
	const [editModule, { loading: editingModule }] = useEditModule()

	const [addRoom, { loading: addingRoom }] = useAddRoom()
	const [editRoom, { loading: editingRoom }] = useEditRoom()

	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)

	const onStudentSearch = (value) => {
		setStudentSearch(value)
	}

	const onProfessorSearch = (value) => {
		setProfessorSearch(value)
	}

	const onCompanySearch = (value) => {
		setCompanySearch(value)
	}

	const onPathwaySearch = (value) => {
		setPathwaySearch(value)
	}

	const onLessonSearch = (value) => {
		setLessonSearch(value)
	}

	const onModuleSearch = (value) => {
		setModuleSearch(value)
	}

	const onRoomSearch = (value) => {
		setRoomSearch(value)
	}

	const [studentSearch, setStudentSearch] = useState()
	const [professorSearch, setProfessorSearch] = useState()
	const [companySearch, setCompanySearch] = useState()
	const [pathwaySearch, setPathwaySearch] = useState()
	const [lessonSearch, setLessonSearch] = useState()
	const [moduleSearch, setModuleSearch] = useState()
	const [roomSearch, setRoomSearch] = useState()

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
								onFirstAction={editStudent}
								firstActioning={editingStudent}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddStudent}
								onSecondAction={addStudent}
								secondActioning={addingStudent}
								mainActionButton={intl.formatMessage({ id: 'edit' })}
							/>
							<DetailStudent />
						</Route>
						<Route path="/professors/:id">
							<Refinement
								backTo="professors"
								FirstActionItem={AddItem}
								FirstActionIcon={TeamOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.professor' })}
								FirstForm={AddProfessor}
								onFirstAction={editProfessor}
								firstActioning={editingProfessor}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddProfessor}
								onSecondAction={addProfessor}
								secondActioning={addingProfessor}
								mainActionButton={intl.formatMessage({ id: 'edit' })}
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
								FirstForm={AddPathway}
								onFirstAction={editPathway}
								firstActioning={editingPathway}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddPathway}
								onSecondAction={addPathway}
								secondActioning={addingPathway}
							/>
							<DetailPathway />
						</Route>
						<Route path="/modules/:id">
							<Refinement
								backTo="modules"
								FirstActionItem={AddItem}
								FirstActionIcon={TagsOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.module' })}
								FirstForm={AddModule}
								onFirstAction={editModule}
								firstActioning={editingModule}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddModule}
								onSecondAction={addModule}
								secondActioning={addingModule}
							/>
							<DetailModule />
						</Route>
						<Route path="/lessons/:id">
							<Refinement
								backTo="lessons"
								FirstActionItem={AddItem}
								FirstActionIcon={TagOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.lesson' })}
								FirstForm={AddLesson}
								onFirstAction={editLesson}
								firstActioning={editingLesson}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddLesson}
								onSecondAction={addLesson}
								secondActioning={addingLesson}
							/>
							<DetailLesson />
						</Route>
						<Route path="/rooms/:id">
							<Refinement
								backTo="rooms"
								FirstActionItem={AddItem}
								FirstActionIcon={ShopOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.room' })}
								FirstForm={AddRoom}
								onFirstAction={editRoom}
								firstActioning={editingRoom}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddRoom}
								onSecondAction={addRoom}
								secondActioning={addingRoom}
							/>
							<DetailRoom />
						</Route>
						<Route path="/companies/:id">
							<Refinement
								backTo="companies"
								FirstActionItem={AddItem}
								FirstActionIcon={WifiOutlined}
								firstActionText={intl.formatMessage({ id: 'edit.company' })}
								FirstForm={AddCompany}
								onFirstAction={addCompany}
								firstActioning={addingCompany}
								SecondActionItem={AddItem}
								SecondActionIcon={EditOutlined}
								secondActionText={intl.formatMessage({
									id: 'edit.constraints',
								})}
								SecondForm={AddCompany}
								onSecondAction={editCompany}
								secondActioning={editingCompany}
							/>
							<DetailCompany />
						</Route>
						<Route path="/calendars/:id">
							<Refinement backTo="calendars" />
							<Calendars />
						</Route>
						<Route path="/students">
							<div className="header">
								<Search
									placeholder="Rechercher un étudiant"
									onSearch={onStudentSearch}
								/>
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
								<StudentsList studentSearch={studentSearch} />
							) : (
								<Students studentSearch={studentSearch} />
							)}
						</Route>
						<Route path="/professors">
							<div className="header">
								<Search
									placeholder="Rechercher un professeur"
									onSearch={onProfessorSearch}
								/>
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={TeamOutlined}
									firstActionText={intl.formatMessage({ id: 'add.professor' })}
									FirstForm={AddProfessor}
									onFirstAction={addProfessor}
									firstActioning={addingProfessor}
								/>
							</div>
							{!isGrid ? (
								<ProfessorsList professorSearch={professorSearch} />
							) : (
								<Professors professorSearch={professorSearch} />
							)}
						</Route>
						<Route path="/pathways">
							<div className="header">
								<Search
									placeholder="Rechercher une formation"
									onSearch={onPathwaySearch}
								/>
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={ExperimentOutlined}
									firstActionText={intl.formatMessage({ id: 'add.pathway' })}
									FirstForm={AddPathway}
									onFirstAction={addPathway}
									firstActioning={addingPathway}
								/>
							</div>
							{!isGrid ? (
								<PathwaysList pathwaySearch={pathwaySearch} />
							) : (
								<Pathways pathwaySearch={pathwaySearch} />
							)}
						</Route>
						<Route path="/modules">
							<div className="header">
								<Search
									placeholder="Rechercher un module"
									onSearch={onModuleSearch}
								/>
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={TagsOutlined}
									firstActionText={intl.formatMessage({ id: 'add.module' })}
									FirstForm={AddModule}
									onFirstAction={addModule}
									firstActioning={addingModule}
								/>
							</div>
							{!isGrid ? (
								<ModulesList moduleSearch={moduleSearch} />
							) : (
								<Modules moduleSearch={moduleSearch} />
							)}
						</Route>
						<Route path="/lessons">
							<div className="header">
								<Search
									placeholder="Rechercher un cours"
									onSearch={onLessonSearch}
								/>
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={TagOutlined}
									firstActionText={intl.formatMessage({ id: 'add.lesson' })}
									FirstForm={AddCour}
									onFirstAction={addLesson}
									firstActioning={addingLesson}
								/>
							</div>
							{!isGrid ? (
								<LessonsList lessonSearch={lessonSearch} />
							) : (
								<Lessons lessonSearch={lessonSearch} />
							)}
						</Route>
						<Route path="/rooms">
							<div className="header">
								<Search
									placeholder="Rechercher une salle"
									onSearch={onRoomSearch}
								/>
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={ShopOutlined}
									firstActionText={intl.formatMessage({ id: 'add.room' })}
									FirstForm={AddRoom}
									onFirstAction={addRoom}
									firstActioning={addingRoom}
								/>
							</div>
							{!isGrid ? (
								<RoomsList roomSearch={roomSearch} />
							) : (
								<Rooms roomSearch={roomSearch} />
							)}
						</Route>
						<Route path="/companies">
							<div className="header">
								<Search
									placeholder="Rechercher une entreprise"
									onSearch={onCompanySearch}
								/>
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									FirstActionItem={AddItem}
									FirstActionIcon={WifiOutlined}
									firstActionText={intl.formatMessage({ id: 'add.company' })}
									FirstForm={AddCompany}
									onFirstAction={addCompany}
									firstActioning={addingCompany}
								/>
							</div>
							{!isGrid ? (
								<CompaniesList companySearch={companySearch} />
							) : (
								<Companies companySearch={companySearch} />
							)}
						</Route>
						<Route path="/calendars">
							<>
								<div className="header">
									<Search placeholder="Rechercher un calendrier" />
									<Refinement
										options={options}
										setIsGrid={setIsGrid}
										isGrid={isGrid}
									/>
								</div>
								<Calendars />
							</>
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
