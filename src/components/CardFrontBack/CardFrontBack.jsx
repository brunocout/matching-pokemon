import React from 'react';
import CardGame from '../../components/CardGame/CardGame';


import './CardFrontBack.css'

    let hasFlipped = false
    let lockBoard = false
    let firstCard, secondCard
    
const CardFrontBack = ({ icon, handleChoice, setWinner }) => {

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
        const arrowDown = document.querySelector('.arrow-down')
        const player1 = document.querySelector('.-player1')
        const player2 = document.querySelector('.-player2')

        let isMatch = firstCard.dataset.pokemon ===
         secondCard.dataset.pokemon
        !isMatch && unFlipCards()

        if (player1.dataset.points == 'three' || player2.dataset.points == 'three') {
            console.log('ganhei')
        } else {
            if (isMatch) {
                if (arrowDown.dataset.currentplayer == 1) {
                    addPoints('player1')
                } else {
                    addPoints('player2')
                }
            } 
        }
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

    const addPoints = (player) => {
        const overlay = document.querySelector('.overlay-text')
        const playerScore = document.querySelector(`.-${player}`)

        setTimeout(() => {
            if (playerScore.dataset.points == 0) {
                playerScore.dataset.points = 1
            } else if (playerScore.dataset.points == 1) {
                playerScore.dataset.points = 2
            } else {
                playerScore.dataset.points = 3
                setWinner(player)
                overlay.classList.add('-visible')
            }
        }, 900);
    }

    return ( 
        <div className="card-front-back" onClick={e=>handleOnClick(e)} data-pokemon={icon}>
            <div className="card -front">
                <CardGame icon={'pokebola'} alt={'pokebola'} />
            </div>
            <div className="card -back" data-color={icon}>
                <CardGame icon={icon}/>
            </div>
        </div> 
    );
}
 
export default CardFrontBack;