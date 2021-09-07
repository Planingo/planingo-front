import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Students from '../Students/Students'
import '../application.scss'
import { useIntl } from 'react-intl'
import {
	AppstoreOutlined,
	UnorderedListOutlined,
	UserOutlined,
} from '@ant-design/icons'
import DetailStudent from '../Students/Student/Detail/DetailStudent'
import StudentsList from '../Students/StudentsList'
import { useAddStudent, useSearchStudents } from '../Students/students.hooks'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddStudent from '../Students/Student/Add/AddStudent'
import { Footer } from '../Layout/Footer/Footer'

export const Student = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addStudent, { loading: addingStudent }] = useAddStudent()


	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)

    const { search, students, loading } = useSearchStudents()
	
	return (
		<div>
            <Switch>
                <Route path="/students/:id">
                    <DetailStudent />
                </Route>
                <Route path="/students/">
                    <div className="header">
                        <Search
                            placeholder="Rechercher un étudiant"
                            onSearch={search}
                        />
                        <Refinement
                            options={options}
                            setIsGrid={setIsGrid}
                            isGrid={isGrid}
                            FirstActionIcon={UserOutlined}
                            firstActionText={intl.formatMessage({ id: 'add.student' })}
                            FirstForm={AddStudent}
                            onFirstAction={addStudent}
                            firstActioning={addingStudent}
                        />
                    </div>
                    {!isGrid ? (
                        <StudentsList students={students} loading={loading} />
                    ) : (
                        <Students students={students} loading={loading} />
                    )}
                    <Footer />
                </Route>
            </Switch>
		</div>
	)
}
