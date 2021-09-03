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
import { useAddModule, useEdit, useSearchModules } from '../Modules/modules.hooks'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddModule from '../Modules/Module/Add/AddModule'
import { useEditConstraints } from '../Settings/Constraints/Hook/moduleConstraints.hook'
import EditConstraint from '../Modules/Module/Edit/EditConstraint'
import { Footer } from '../Layout/Footer/Footer'

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
    
    const { search, modules, loading } = useSearchModules()
	
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
                            onSearch={search}
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
                        <ModulesList modules={modules} loading={loading} />
                    ) : (
                        <Modules modules={modules} loading={loading} />
                    )}
                    <Footer />
                </Route>
            </Switch>
		</div>
	)
}
