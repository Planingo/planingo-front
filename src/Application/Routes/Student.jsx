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
import Edit from '../Students/Student/Edit/Edit'
import EditConstraint from '../Students/Student/Edit/EditConstraint'
import { useAddStudent, useEdit } from '../Students/students.hooks'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddStudent from '../Students/Student/Add/AddStudent'
import { useEditConstraints } from '../Settings/Constraints/Hook/studentConstraints.hook'

export const Student = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addStudent, { loading: addingStudent }] = useAddStudent()
	const [edit, { loading: editingStudent }] = useEdit()
    const [editConstraints, {loading: editingStudentConstraints}] = useEditConstraints()


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
