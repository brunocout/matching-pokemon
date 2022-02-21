import React from 'react';
import PlayerName from '../../components/PlayerName/PlayerName';
import PlayerScore from '../../components/PlayerScore/PlayerScore';
import VsPlayer from '../../components/VsPlayer/VsPlayer';
import './ScoreBoard.css'

const ScoreBoard = () => {
    
    return ( 
    <div className='score-board'>
        <PlayerName player={'Player1'} />
        <PlayerScore />
        <VsPlayer />
        <PlayerScore />
        <PlayerName player={'Player2'} />
    </div> 
    );
}
 
export default ScoreBoard;