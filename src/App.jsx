import React from 'react';
import './App.css'
import PlayerScore from './components/PlayerScore/PlayerScore'
import BoardGame from './objects/BoardGame/BoardGame';
import ScoreBoard from './objects/ScoreBoard/ScoreBoard';

function App() {
  return (
    <div className="App">
        <PlayerScore />
        <ScoreBoard />
        <BoardGame amount={6} />
    </div>
  )
}

export default App
