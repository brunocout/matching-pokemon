import React from 'react';

import './Overlay.css'

const Overlay = ({ winner }) => {

    const handleOnClick = () => {
        window.location.reload()
    }

    return ( 
        <div className="overlay-text">
            <h1>Victory</h1>
            <p className='overlay-text-winner'>{winner} won!!</p>
            <button className='overlay-text-button' onClick={handleOnClick}>Restart<img src="../assets/images/restart.png"/></button>    
        </div>
     );
}
 
export default Overlay;