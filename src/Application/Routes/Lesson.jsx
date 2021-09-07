import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Lessons from '../Lessons/Lessons'
import '../application.scss'
import { useIntl } from 'react-intl'
import {
	AppstoreOutlined,
	UnorderedListOutlined,
    TagsOutlined
} from '@ant-design/icons'
import DetailLesson from '../Lessons/Lesson/Detail/DetailLesson'
import LessonsList from '../Lessons/LessonsList'
import { useAddLesson, useSearchLessons } from '../Lessons/lessons.hooks'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddLesson from '../Lessons/Lesson/Add/AddLesson'
import { Footer } from '../Layout/Footer/Footer'

export const Lesson = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addLesson, { loading: addingLesson }] = useAddLesson()

	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)
    
    const { search, lessons, loading } = useSearchLessons()
	
	return (
		<div>
            <Switch>
                <Route path="/lessons/:id">
                    <DetailLesson />
                </Route>
                <Route path="/lessons/">
                    <div className="header">
                        <Search
                            placeholder="Rechercher un cours"
                            onSearch={search}
                        />
                        <Refinement
                            options={options}
                            setIsGrid={setIsGrid}
                            isGrid={isGrid}
                            FirstActionIcon={TagsOutlined}
                            firstActionText={intl.formatMessage({ id: 'add.lesson' })}
                            FirstForm={AddLesson}
                            onFirstAction={addLesson}
                            firstActioning={addingLesson}
                        />
                    </div>
                    {!isGrid ? (
                        <LessonsList lessons={lessons} loading={loading} />
                    ) : (
                        <Lessons lessons={lessons} loading={loading} />
                    )}
                    <Footer />
                </Route>
            </Switch>
		</div>
	)
}
