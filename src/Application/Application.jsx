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

const Application = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)

	return (
		<div className="application">
			<Navigation />
			<div className="body">
				<div className="middle">
					<Switch>
						<Route path="/students/:id">
							<DetailStudent />
						</Route>
						<Route path="/professors/:id">
							<DetailProfessor />
						</Route>
						<Route path="/calendars/:id">
							<DetailPathway />
						</Route>
						<Route path="/pathways/:id">
							<DetailPathway />
						</Route>
						<Route path="/modules/:id">
							<DetailModule />
						</Route>
						<Route path="/lessons/:id">
							<DetailLesson />
						</Route>
						<Route path="/rooms/:id">
							<DetailRoom />
						</Route>
						<Route path="/companies/:id">
							<DetailCompany />
						</Route>
						<Route path="/students">
							<div className="header">
								<Search placeholder="Rechercher un étudiant" />
								<Refinement
									options={options}
									setIsGrid={setIsGrid}
									isGrid={isGrid}
									AddItem={AddItem}
									FirstIcon={UserOutlined}
									firstAddText={intl.formatMessage({ id: 'add.student' })}
								>
									<AddStudent />
								</Refinement>
							</div>
							{isGrid ? (
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
									AddItem={AddItem}
									FirstIcon={TeamOutlined}
									firstAddText={intl.formatMessage({ id: 'add.professor' })}
								>
									<AddProfessor />
								</Refinement>
							</div>
							{isGrid ? (
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
									AddItem={AddItem}
									FirstIcon={ExperimentOutlined}
									firstAddText={intl.formatMessage({ id: 'add.pathway' })}
								>
									<AddPathway />
								</Refinement>
							</div>
							{isGrid ? (
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
									AddItem={AddItem}
									FirstIcon={TagsOutlined}
									firstAddText={intl.formatMessage({ id: 'add.module' })}
								>
									<AddModule />
								</Refinement>
							</div>
							{isGrid ? (
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
									AddItem={AddItem}
									FirstIcon={TagOutlined}
									firstAddText={intl.formatMessage({ id: 'add.lesson' })}
								>
									<AddCour />
								</Refinement>
							</div>
							{isGrid ? (
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
									AddItem={AddItem}
									FirstIcon={ShopOutlined}
									firstAddText={intl.formatMessage({ id: 'add.room' })}
								>
									<AddRoom />
								</Refinement>
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
									AddItem={AddItem}
									FirstIcon={WifiOutlined}
									firstAddText={intl.formatMessage({ id: 'add.company' })}
								>
									<AddCompany />
								</Refinement>
							</div>
							{isGrid ? (
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
