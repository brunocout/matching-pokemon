import React from 'react';
import ArrowDown from '../../components/ArrowDown/ArrowDown';
import PlayerName from '../../components/PlayerName/PlayerName';
import VsPlayer from '../../components/VsPlayer/VsPlayer';
import './ScoreBoard.css'


const ScoreBoard = () => {

    return ( 
    <div className='score-board'>
        <ArrowDown currentPlayer={1} />
        <PlayerName player={'Player1'} />
        <ol className='player-score -player1' data-points={0}>
            <li className='pointer'>1</li>
            <li className='pointer'>2</li>
            <li className='pointer'>3</li>
        </ol> 
        <VsPlayer />
        <ol className='player-score -player2' data-points={0}>
            <li className='pointer'>1</li>
            <li className='pointer'>2</li>
            <li className='pointer'>3</li>
        </ol>
        <PlayerName player={'Player2'} />
    </div> 
    );
}
 
export default ScoreBoard;