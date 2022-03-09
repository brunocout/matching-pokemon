import React, { useState } from 'react';
import './App.css'
import Footer from './components/Footer/Footer';
import FinalOverlay from './components/Overlay/FinalOverlay/FinalOverlay';
import InitialOverlay from './components/Overlay/InitialOverlay/InitialOverlay';
import BoardGame from './objects/BoardGame/BoardGame';
import ScoreBoard from './objects/ScoreBoard/ScoreBoard';

function App() {

  const [winner, setWinner] = useState('')
  const [player1, setPlayer1] = useState('Player1')
  const [player2, setPlayer2] = useState('Player2')
  const [reset, setReset] = useState(false)


  return (
      <div className="App">
          <InitialOverlay setPlayer1={setPlayer1} setPlayer2={setPlayer2} player1={player1} player2={player2}/>
          <FinalOverlay winner={winner} setReset={setReset}/>
          <ScoreBoard player1={player1} player2={player2} />
          <BoardGame setWinner={setWinner} player1={player1} player2={player2} reset={reset}/>
          <Footer />
      </div>
  )
}

export default App
