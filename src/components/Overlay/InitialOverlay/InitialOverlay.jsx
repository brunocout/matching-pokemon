import React from 'react';

import './InitialOverlay.css'

const InitialOverlay = ({ setPlayer1, setPlayer2 }) => {


    const handleOnClick = () => {
        const StartButton = document.querySelector('.initial-overlay')
        
        StartButton.classList.remove('-visible')
    }

    const handleOnInputChange1 = (e) => {
        setPlayer1(e.target.value)
    }

    const handleOnInputChange2 = (e) => {
        setPlayer2(e.target.value)
    }

    return ( 
        <div className='initial-overlay -visible'>
            <h1>Start Game</h1>
            <div className='initial-overlay-input'>
                <input type="text" placeholder='Player1' className='playername1' onChange={e=>handleOnInputChange1(e)} maxLength="7"/>
                <input type="text" placeholder='Player2' className='playername2' onChange={e=>handleOnInputChange2(e)} maxLength="7"/>
            </div>
            <button className='initial-overlay-button' onClick={handleOnClick}>Press Start<img src="../assets/images/Start.png"/></button>    
        </div>
     );
}
 
export default InitialOverlay;