import React from 'react'
import './App.css'
import Switch from './Components/Switch/switch'
import Input from './Components/Input/Input/input'
import Button from './Components/Button/button'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Switch off="Off" on="On" label="label"></Switch>
				<Input placeholder="This is placeholder" disabled icon="time" />
				<Button type="primary" loading icon="time" disabled>
					Coucou
				</Button>
			</header>
		</div>
	)
}

export default App
