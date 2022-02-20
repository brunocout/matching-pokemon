import React from 'react';
import CardGame from '../../components/CardGame/cardgame';
import './BoardGame.css'

const BoardGame = ({ amount }) => {
    
    const arr = []
    for (let i = 0; i < amount; i++) {
        arr.push(1)
    }
    
    return ( 
    <div className='board-game'>
        {arr.map(cards => <CardGame/>)}
    </div> 
    );
}
 
export default BoardGame;