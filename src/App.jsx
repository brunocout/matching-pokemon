import React from 'react';
import './App.css'
import CardGame from './components/CardGame/CardGame'
import PlayerScore from './components/PlayerScore/PlayerScore'

function App() {
  return (
    <div className="App">
        <PlayerScore />
        <CardGame />
    </div>
  )
}

export default App
