import React from 'react';
import CardFrontBack from '../../components/CardFrontBack/CardFrontBack';
import cards from './data';
import './BoardGame.css'

const BoardGame = () => {
    const flipAndHideCards = (cards) => {
        cards.forEach((card) => card.classList.remove('-active'))
    }

    const swapPlayer = () => {
        const arrowDown = document.querySelector('.arrow-down')
        const currentPlayer = arrowDown.getAttribute('data-currentplayer')
        arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1)
    }

    const handleOnClick = () => {
        const boardGame = document.querySelector('.board-game')
        const cardsActive = boardGame.querySelectorAll('.card-front-back.-active')

        if (cardsActive.length == 2) {
            setTimeout(() => {
                flipAndHideCards(cardsActive)
                swapPlayer()
            }, 450);
        }
    }
    
    return ( 
    <div className='board-game' onClick={handleOnClick}>
        {cards.map(card => <CardFrontBack icon={card.icon} alt={card.alt}/>)}
    </div> 
    );
}
 
export default BoardGame;