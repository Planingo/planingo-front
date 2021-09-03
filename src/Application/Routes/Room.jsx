import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Rooms from '../Rooms/Rooms'
import '../application.scss'
import { useIntl } from 'react-intl'
import {
	AppstoreOutlined,
	UnorderedListOutlined,
	EditOutlined,
    ShopOutlined
} from '@ant-design/icons'
import DetailRoom from '../Rooms/Room/Detail/DetailRoom'
import RoomsList from '../Rooms/RoomsList'
import { useAddRoom, useEdit, useSearchRooms } from '../Rooms/rooms.hooks'
import Refinement from '../../Components/Refinement/refinement'
import Search from '../../Components/Search/search'
import AddRoom from '../Rooms/Room/Add/AddRoom'
import { useEditConstraints } from '../Settings/Constraints/Hook/roomConstraints.hook'
import EditConstraint from '../Rooms/Room/Edit/EditConstraint'
import { Footer } from '../Layout/Footer/Footer'

export const Room = () => {
	const options = [
		{ label: <AppstoreOutlined />, value: 'Grille' },
		{ label: <UnorderedListOutlined />, value: 'List' },
	]

	const [addRoom, { loading: addingRoom }] = useAddRoom()
	const [edit, { loading: editingRoom }] = useEdit()
    const [editConstraints, {loading: editingRoomConstraints}] = useEditConstraints()

	const intl = useIntl()

	const [isGrid, setIsGrid] = useState(true)
    
    const { search, rooms, loading } = useSearchRooms()
	
	return (
		<div>
            <Switch>
                <Route path="/rooms/:id">
                    <DetailRoom />
                </Route>
                <Route path="/rooms/">
                    <div className="header">
                        <Search
                            placeholder="Rechercher une salle"
                            onSearch={search}
                        />
                        <Refinement
                            options={options}
                            setIsGrid={setIsGrid}
                            isGrid={isGrid}
                            FirstActionIcon={ShopOutlined}
                            firstActionText={intl.formatMessage({ id: 'add.room' })}
                            FirstForm={AddRoom}
                            onFirstAction={addRoom}
                            firstActioning={addingRoom}
                        />
                    </div>
                    {!isGrid ? (
                        <RoomsList rooms={rooms} loading={loading} />
                    ) : (
                        <Rooms rooms={rooms} loading={loading} />
                    )}
                    <Footer />
                </Route>
            </Switch>
		</div>
	)
}
