import React from 'react';

import './CardGame.css'

const CardGame = ({ icon = "pokebola", alt = "pokebola", color = "red"}) => {

    return ( 
    <div className={'card-game'}>
        <img
        src={`../../../assets/images/`+ icon +`.png`} 
        alt={alt}/>
    </div> 
    );
}
 
export default CardGame;