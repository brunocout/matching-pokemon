import React from 'react';
import CardGame from '../../components/CardGame/cardgame';

const BoardGame = ({ amount }) => {
    const arr = []
    for (let i = 0; i < amount; i++) {
        arr.push(1)
    }
    
    return <>{arr.map(cards => <CardGame/>)}</>
}
 
export default BoardGame;