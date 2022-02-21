import React from 'react';

import './PlayerScore.css'

const PlayerScore = ({ points = 0 }) => {
    return ( 
    <ol className='player-score' data-points={points}>
        <li className='pointer'>Um</li>
        <li className='pointer'>Dois</li>
        <li className='pointer'>Três</li>
    </ol> 
    );
}
 
export default PlayerScore;