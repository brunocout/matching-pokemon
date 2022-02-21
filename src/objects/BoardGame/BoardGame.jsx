import React from 'react';
import CardFrontBack from '../../components/CardFrontBack/CardFrontBack';
import cards from './data';
import './BoardGame.css'

const BoardGame = ({ amount }) => {
    
    return ( 
    <div className='board-game'>
        {cards.map(card => <CardFrontBack icon={card.icon} alt={card.alt}/>)}
    </div> 
    );
}
 
export default BoardGame;