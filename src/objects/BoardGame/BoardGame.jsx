import React, { useEffect, useState } from 'react';
import CardFrontBack from '../../components/CardFrontBack/CardFrontBack';
import cards from './data';
import './BoardGame.css'

const BoardGame = () => {

    const [card, setCard] = useState([])
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    const shuffleCard = () => {
        const shuffledCards = [...cards, ...cards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
        setCard(shuffledCards) 
    }

    useEffect(() => {
        shuffleCard()
    }, [])

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne === choiceTwo) {
                resetChoice()
            } else {
                resetChoice()
            }
        }
    }, [choiceOne, choiceTwo])

    const resetChoice = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
    }

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
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
                swapPlayer()
            }, 700);
        }
    }
    
    return ( 
    <div className='board-game' onClick={handleOnClick}>
        {card.map(cards => <CardFrontBack 
                            icon={cards.icon}
                            handleChoice={handleChoice}/>)}
    </div> 
    );
}
 
export default BoardGame;