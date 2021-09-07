import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Pathways from '../Pathways/Pathways'
import '../application.scss'
import { useIntl } from 'react-intl'
import {
	AppstoreOutlined,
	UnorderedListOutlined,
    TeamOutlined
} from '@ant-design/icons'
import DetailPathway from '../Pathways/Pathway/Detail/DetailPathway'
import PathwaysList from '../Pathways/PathwaysList'
import { useAddPathway, useSearchPathways } from '../Pathways/pathways.hooks'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddPathway from '../Pathways/Pathway/Add/AddPathway'
import { Footer } from '../Layout/Footer/Footer'

export const Pathway = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addPathway, { loading: addingPathway }] = useAddPathway()

	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)
    
    const { search, pathways, loading } = useSearchPathways()
	
	return (
		<div>
            <Switch>
                <Route path="/pathways/:id">
                    <DetailPathway />
                </Route>
                <Route path="/pathways/">
                    <div className="header">
                        <Search
                            placeholder="Rechercher une formation"
                            onSearch={search}
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
                        <PathwaysList pathways={pathways} loading={loading} />
                    ) : (
                        <Pathways pathways={pathways} loading={loading} />
                    )}
                    <Footer />
                </Route>
            </Switch>
		</div>
	)
}
