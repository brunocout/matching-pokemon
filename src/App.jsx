import React from 'react';
import './App.css'
import BoardGame from './objects/BoardGame/BoardGame';
import ScoreBoard from './objects/ScoreBoard/ScoreBoard';

function App() {

  const handleOnClick = () => {
    window.location.reload()
  }

  return (
      <div className="App">
            <div className="overlay-text">
              <h1>Victory</h1>
              <p className='overlay-text-winner'>player1 won!!</p>
              <button className='overlay-text-button' onClick={handleOnClick}>Restart<img src="../assets/images/restart.png"/></button>    
            </div>
            <ScoreBoard />
            <BoardGame />
            <footer>
              <img src="../assets/images/profile.png"/>
              <p>Bruno Coutinho</p>
            </footer>
      </div>
  )
}

export default App
