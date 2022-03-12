import React from 'react';

import './FinalOverlay.css'

const FinalOverlay = ({ winner }) => {

    // const handleOnClick = () => {
    //     setReset(true)
    // }

    return ( 
        <div className="final-overlay">
            <h1>Victory</h1>
            <p className='final-overlay-winner'>{winner} won!!</p>
            <button className='final-overlay-button' >Restart<img src="../assets/images/restart.png"/></button>    
        </div>
     );
}
 
export default FinalOverlay;