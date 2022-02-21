import React from 'react';
import CardGame from '../../components/CardGame/CardGame';

import './CardFrontBack.css'

const CardFrontBack = () => {
    return ( 
    <div className="card-front-back ">
        <div className="card -front">
            <CardGame icon={'pokebola'} alt={'pokebola'} />
        </div>
        <div className="card -back">
            <CardGame icon={'charmander'} alt={'charmander'}/>
        </div>
    </div> );
}
 
export default CardFrontBack;