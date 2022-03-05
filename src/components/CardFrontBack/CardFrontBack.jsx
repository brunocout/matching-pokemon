import React, { useState } from 'react';
import CardGame from '../../components/CardGame/CardGame';

import './CardFrontBack.css'

    let hasFlipped = false
    let lockBoard = false
    let firstCard, secondCard
    
const CardFrontBack = ({ icon, handleChoice }) => {

    const handleOnClick = (e) => {
        const cardFrontBack = e.target.closest('.card-front-back')
        if (lockBoard) return 
        if (cardFrontBack === firstCard) return
        cardFrontBack.classList.add('-active')

        handleChoice(icon)

        if (!hasFlipped) {
            hasFlipped = true
            firstCard = cardFrontBack
            return
        }

        hasFlipped = false
        secondCard = cardFrontBack
        checkForMatch()
    }

    const checkForMatch = () => {
        let isMatch = firstCard.dataset.pokemon ===
         secondCard.dataset.pokemon
        !isMatch && unFlipCards() 
    }

    const unFlipCards = () => {
        lockBoard = true
        setTimeout(() => {
            firstCard.classList.remove('-active')
            secondCard.classList.remove('-active')
            resetBoard()
        }, 700);
    }

    const resetBoard = () => {
        [hasFlipped, lockBoard] = [false, false]
        [firstCard, secondCard] = [null, null]
    }

    return ( 
    <div className="card-front-back" onClick={e=>handleOnClick(e)} data-pokemon={icon}>
        <div className="card -front">
            <CardGame icon={'pokebola'} alt={'pokebola'} />
        </div>
        <div className="card -back" data-color={icon}>
            <CardGame icon={icon}/>
        </div>
    </div> );
}
 
export default CardFrontBack;