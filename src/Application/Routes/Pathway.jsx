import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Pathways from '../Pathways/Pathways'
import '../application.scss'
import { useIntl } from 'react-intl'
import {
	AppstoreOutlined,
	UnorderedListOutlined,
	EditOutlined,
    TeamOutlined
} from '@ant-design/icons'
import DetailPathway from '../Pathways/Pathway/Detail/DetailPathway'
import PathwaysList from '../Pathways/PathwaysList'
import { useAddPathway, useEditPathway } from '../Pathways/pathways.hooks'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddPathway from '../Pathways/Pathway/Add/AddPathway'

export const Pathway = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addPathway, { loading: addingPathway }] = useAddPathway()
	const [editPathway, { loading: editingPathway }] = useEditPathway()

	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)

	const onPathwaySearch = (value) => {
		setPathwaySearch(value)
	}

	const [pathwaySearch, setPathwaySearch] = useState()
	
	return (
		<div>
            <Switch>
                <Route path="/pathways/:id">
                    <Refinement
                        backTo="pathways"
                        FirstActionIcon={TeamOutlined}
                        firstActionText={intl.formatMessage({ id: 'edit.pathway' })}
                        FirstForm={AddPathway}
                        onFirstAction={editPathway}
                        firstActioning={editingPathway}
                        SecondActionIcon={EditOutlined}
                        secondActionText={intl.formatMessage({
                            id: 'edit.constraints',
                        })}
                        SecondForm={AddPathway}
                        onSecondAction={addPathway}
                        secondActioning={addingPathway}
                        mainActionButton={intl.formatMessage({ id: 'edit' })}
                    />
                    <DetailPathway />
                </Route>
                <Route path="/pathways/">
                    <div className="header">
                        <Search
                            placeholder="Rechercher une formation"
                            onSearch={onPathwaySearch}
                        />
                        <Refinement
                            options={options}
                            setIsGrid={setIsGrid}
                            isGrid={isGrid}
                            FirstActionIcon={TeamOutlined}
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
            </Switch>
		</div>
	)
}
