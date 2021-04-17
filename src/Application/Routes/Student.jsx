import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Students from '../Students/Students'
import '../application.scss'
import { useIntl } from 'react-intl'
import {
	AppstoreOutlined,
	UnorderedListOutlined,
	UserOutlined,
	EditOutlined,
} from '@ant-design/icons'
import DetailStudent from '../Students/Student/Detail/DetailStudent'
import StudentsList from '../Students/StudentsList'
import EditStudent from '../Students/Student/Edit/EditStudent'
import EditConstraintStudent from '../Students/Student/Edit/EditConstraintStudent'
import { useAddStudent, useEditStudent } from '../Students/students.hooks'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddStudent from '../Students/Student/Add/AddStudent'
import { useEditStudentConstraints } from '../Settings/Constraints/Hook/studentConstraints.hook'

export const Student = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addStudent, { loading: addingStudent }] = useAddStudent()
	const [editStudent, { loading: editingStudent }] = useEditStudent()
    const [editStudentConstraints, {loading: editingStudentConstraints}] = useEditStudentConstraints()


	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)

	const onStudentSearch = (value) => {
		setStudentSearch(value)
	}

	const [studentSearch, setStudentSearch] = useState()
	
	return (
		<div>
            <Switch>
                <Route path="/students/:id">
                    <Refinement
                        backTo="students"
                        FirstActionIcon={UserOutlined}
                        firstActionText={intl.formatMessage({ id: 'edit.student' })}
                        FirstForm={EditStudent}
                        onFirstAction={editStudent}
                        firstActioning={editingStudent}
                        
                        SecondActionIcon={EditOutlined}
                        secondActionText={intl.formatMessage({
                            id: 'edit.constraints',
                        })}
                        SecondForm={EditConstraintStudent}
                        onSecondAction={editStudentConstraints}
                        secondActioning={editingStudentConstraints}

                        mainActionButton={intl.formatMessage({ id: 'edit' })}
                    />
                    <DetailStudent />
                </Route>
                <Route path="/students/">
                    <div className="header">
                        <Search
                            placeholder="Rechercher un étudiant"
                            onSearch={onStudentSearch}
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
                        <StudentsList studentSearch={studentSearch} />
                    ) : (
                        <Students studentSearch={studentSearch} />
                    )}
                </Route>
            </Switch>
		</div>
	)
}
