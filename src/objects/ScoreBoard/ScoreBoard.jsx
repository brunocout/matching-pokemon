import React from 'react';
import PlayerName from '../../components/PlayerName/PlayerName';
import './ScoreBoard.css'

const ScoreBoard = () => {
    
    return ( 
    <div className='score-board'>
        <PlayerName player={'Player1'} />
        <PlayerName player={'Player2'} />
    </div> 
    );
}
 
export default ScoreBoard;