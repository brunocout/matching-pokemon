import React, { useState } from 'react';
import './App.css'
import Footer from './components/Footer/Footer';
import Overlay from './components/Overlay/Overlay';
import BoardGame from './objects/BoardGame/BoardGame';
import ScoreBoard from './objects/ScoreBoard/ScoreBoard';

function App() {

  const [winner, setWinner] = useState('')

  return (
      <div className="App">
          <Overlay winner={winner} />
          <ScoreBoard />
          <BoardGame setWinner={setWinner}/>
          <Footer />
      </div>
  )
}

export default App
