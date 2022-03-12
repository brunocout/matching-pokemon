import React, { useEffect, useState } from 'react';
import CardFrontBack from '../../components/CardFrontBack/CardFrontBack';
import cards from './data';
import './BoardGame.css'

const BoardGame = ({ setWinner, player1, player2, reset }) => {

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
        const player1 = document.querySelector('.-player1')
        const player2 = document.querySelector('.-player2')

        if (!choiceTwo) {
            roundPlayer(cardsActive)
        } else if (player1.dataset.points == 3) {
            playerWinner('player1')
        } else if (player2.dataset.points == 3) {
            playerWinner('player2')
        }
    }

    const playerWinner = (player) => {
        setWinner(player)
    }

    const roundPlayer = (round) => {
        setTimeout(() => {
            if (round.length == 2) {
                swapPlayer()
            } else if (round.length == 4) {
                swapPlayer()
            } else if (round.length == 6) {
                swapPlayer()
            } else if (round.length == 8) {
                swapPlayer()
            } else if (round.length == 10) {
                swapPlayer()
            }
        }, 1000);
    }
    
    return ( 
    <div className='board-game' onClick={handleOnClick}>
        {card.map(cards => <CardFrontBack 
                            icon={cards.icon}
                            handleChoice={handleChoice}
                            setWinner={setWinner}
                            player1={player1} player2={player2}/>)}
    </div> 
    );
}
 
export default BoardGame;