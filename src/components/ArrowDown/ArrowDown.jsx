import React from 'react';

import './ArrowDown.css'

const ArrowDown = ({ currentPlayer = 1 }) => {
    return <img className='arrow-down'
                data-currentplayer={currentPlayer}
                src="../../../assets/images/arrow.png"
                alt="arrow" />
}
 
export default ArrowDown;