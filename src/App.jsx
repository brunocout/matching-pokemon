import React from 'react';
import './App.css'
import BoardGame from './objects/BoardGame/BoardGame';
import ScoreBoard from './objects/ScoreBoard/ScoreBoard';

function App() {
  return (
    <div className="App">
        <ScoreBoard />
        <BoardGame amount={2} />
    </div>
  )
}

export default App
