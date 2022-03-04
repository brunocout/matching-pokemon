import React from 'react';

import './CardGame.css'

const CardGame = ({ icon = "pokebola" }) => {

    return ( 
    <div className={'card-game'}>
        <img
        src={`../../../assets/images/`+ icon +`.png`}/>
    </div> 
    );
}
 
export default CardGame;