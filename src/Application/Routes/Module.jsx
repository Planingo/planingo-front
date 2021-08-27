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
import { useAddModule, useEdit } from '../Modules/modules.hooks'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddModule from '../Modules/Module/Add/AddModule'
import { useEditConstraints } from '../Settings/Constraints/Hook/moduleConstraints.hook'
import EditConstraint from '../Modules/Module/Edit/EditConstraint'

export const Module = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addModule, { loading: addingModule }] = useAddModule()
	const [edit, { loading: editingModule }] = useEdit()
    const [editConstraints, {loading: editingConstraints}] = useEditConstraints()

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
