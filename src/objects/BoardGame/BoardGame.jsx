import React from 'react';
import CardFrontBack from '../../components/CardFrontBack/CardFrontBack';
import './BoardGame.css'

const BoardGame = ({ amount }) => {
    
    const arr = []
    for (let i = 0; i < amount; i++) {
        arr.push(1)
    }
    
    return ( 
    <div className='board-game'>
        {arr.map(cards => <CardFrontBack />)}
    </div> 
    );
}
 
export default BoardGame;