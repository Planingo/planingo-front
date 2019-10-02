import React from 'react'
import './App.css'
import Switch from './Componants/Switch/switch'
import Input from './Componants/Input/Input/input'
import Button from './Componants/Button/button'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Switch off="Off" on="On" label="label"></Switch>
				<Input placeholder="This is placeholder" disabled icon="time" />
				<Button type='primary' loading icon='time' disabled >Coucou</Button>
			</header>
		</div>
	)
}

export default App
