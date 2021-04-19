import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Modules from '../Modules/Modules'
import '../application.scss'
import { useIntl } from 'react-intl'
import {
	AppstoreOutlined,
	UnorderedListOutlined,
	EditOutlined,
    TagsOutlined
} from '@ant-design/icons'
import DetailModule from '../Modules/Module/Detail/DetailModule'
import ModulesList from '../Modules/ModulesList'
import { useAddModule, useEditModule } from '../Modules/modules.hooks'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddModule from '../Modules/Module/Add/AddModule'
import { useEditModuleConstraints } from '../Settings/Constraints/Hook/moduleConstraints.hook'
import EditConstraintModule from '../Modules/Module/Edit/EditConstraintModule'

export const Module = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addModule, { loading: addingModule }] = useAddModule()
	const [editModule, { loading: editingModule }] = useEditModule()
    const [editModuleConstraints, {loading: editingModuleConstraints}] = useEditModuleConstraints()

	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)

	const onModuleSearch = (value) => {
		setModuleSearch(value)
	}

	const [moduleSearch, setModuleSearch] = useState()
	
	return (
		<div>
            <Switch>
                <Route path="/modules/:id">
                    <Refinement
                        backTo="modules"
                        FirstActionIcon={TagsOutlined}
                        firstActionText={intl.formatMessage({ id: 'edit.module' })}
                        FirstForm={AddModule}
                        onFirstAction={editModule}
                        firstActioning={editingModule}
                        SecondActionIcon={EditOutlined}
                        secondActionText={intl.formatMessage({
                            id: 'edit.constraints',
                        })}
                        SecondForm={EditConstraintModule}
                        onSecondAction={editModuleConstraints}
                        secondActioning={editingModuleConstraints}
                        mainActionButton={intl.formatMessage({ id: 'edit' })}
                    />
                    <DetailModule />
                </Route>
                <Route path="/modules/">
                    <div className="header">
                        <Search
                            placeholder="Rechercher un module"
                            onSearch={onModuleSearch}
                        />
                        <Refinement
                            options={options}
                            setIsGrid={setIsGrid}
                            isGrid={isGrid}
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
            </Switch>
		</div>
	)
}
