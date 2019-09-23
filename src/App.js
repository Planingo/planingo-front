import React from 'react';
import './App.css';
import Switch from './Componants/Switch/switch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch off='Off' on='On' label='label'></Switch>
      </header>
    </div>
  );
}

export default App;
