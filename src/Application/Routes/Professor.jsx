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
import DetailProfessor from '../Professors/Professor/Detail/DetailProfessor'
import ProfessorsList from '../Professors/ProfessorsList'
import { useAddProfessor, useEditProfessor } from '../Professors/professors.hooks'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddProfessor from '../Professors/Professor/Add/AddProfessor'
import { useEditProfessorConstraints } from '../Settings/Constraints/Hook/professorConstraints.hook'
import EditConstraintProfessor from '../Professors/Professor/Edit/EditConstraintProfessor'

export const Professor = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addProfessor, { loading: addingProfessor }] = useAddProfessor()
	const [editProfessor, { loading: editingProfessor }] = useEditProfessor()
    const [editProfessorConstraints, {loading: editingProfessorConstraints}] = useEditProfessorConstraints()

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
                        onFirstAction={editProfessor}
                        firstActioning={editingProfessor}
                        SecondActionIcon={EditOutlined}
                        secondActionText={intl.formatMessage({
                            id: 'edit.constraints',
                        })}
                        SecondForm={EditConstraintProfessor}
                        onSecondAction={editProfessorConstraints}
                        secondActioning={editingProfessorConstraints}
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
