import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Professors from '../Professors/Professors'
import '../application.scss'
import { useIntl } from 'react-intl'
import {
	AppstoreOutlined,
	UnorderedListOutlined,
	EditOutlined,
    TeamOutlined
} from '@ant-design/icons'
import { DetailProfessor } from '../Professors/Professor/Detail/DetailProfessor'
import ProfessorsList from '../Professors/ProfessorsList'
import { useAddProfessor, useEdit } from '../Professors/professors.hooks'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddProfessor from '../Professors/Professor/Add/AddProfessor'
import { useEditConstraints } from '../Settings/Constraints/Hook/professorConstraints.hook'
import EditConstraint from '../Professors/Professor/Edit/EditConstraint'

export const Professor = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addProfessor, { loading: addingProfessor }] = useAddProfessor()
	const [edit, { loading: editingProfessor }] = useEdit()
    const [editConstraints, {loading: editingConstraints}] = useEditConstraints()

	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)

	const onProfessorSearch = (value) => {
		setProfessorSearch(value)
	}

	const [professorSearch, setProfessorSearch] = useState()
	
	return (
		<div>
            <Switch>
                <Route path="/professors/:id">
                    <Refinement
                        backTo="professors"
                        FirstActionIcon={TeamOutlined}
                        firstActionText={intl.formatMessage({ id: 'edit.professor' })}
                        FirstForm={AddProfessor}
                        onFirstAction={edit}
                        firstActioning={editingProfessor}
                        SecondActionIcon={EditOutlined}
                        secondActionText={intl.formatMessage({
                            id: 'edit.constraints',
                        })}
                        SecondForm={EditConstraint}
                        onSecondAction={editConstraints}
                        secondActioning={editingConstraints}
                        mainActionButton={intl.formatMessage({ id: 'edit' })}
                    />
                    <DetailProfessor />
                </Route>
                <Route path="/professors/">
                    <div className="header">
                        <Search
                            placeholder="Rechercher un professeur"
                            onSearch={onProfessorSearch}
                        />
                        <Refinement
                            options={options}
                            setIsGrid={setIsGrid}
                            isGrid={isGrid}
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
            </Switch>
		</div>
	)
}
