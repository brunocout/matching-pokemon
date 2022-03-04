import React, { useEffect, useState } from 'react';
import CardFrontBack from '../../components/CardFrontBack/CardFrontBack';
import cards from './data';
import './BoardGame.css'

const BoardGame = () => {

    const [card, setCard] = useState([])


    useEffect(() => {
        const shuffledCards = [...cards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
        setCard(shuffledCards) 
    }, [])

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
        {card.map(card => <CardFrontBack icon={card.icon}/>)}
    </div> 
    );
}
 
export default BoardGame;