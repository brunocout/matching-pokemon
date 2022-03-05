import React from 'react';
import ArrowDown from '../../components/ArrowDown/ArrowDown';
import PlayerName from '../../components/PlayerName/PlayerName';
import PlayerScore from '../../components/PlayerScore/PlayerScore';
import VsPlayer from '../../components/VsPlayer/VsPlayer';
import './ScoreBoard.css'

const ScoreBoard = () => {
    
    return ( 
    <div className='score-board'>
        <ArrowDown currentPlayer={1} />
        <PlayerName player={'Player1'} />
        <PlayerScore points={1}/>
        <VsPlayer />
        <PlayerScore points={1}/>
        <PlayerName player={'Player2'} />
    </div> 
    );
}
 
export default ScoreBoard;