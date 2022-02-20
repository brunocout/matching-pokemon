import React from 'react';
import './App.css'
import PlayerScore from './components/PlayerScore/PlayerScore'
import BoardGame from './objects/BoardGame/BoardGame';

function App() {
  return (
    <div className="App">
        <PlayerScore />
        <BoardGame amount={6} />
    </div>
  )
}

export default App
