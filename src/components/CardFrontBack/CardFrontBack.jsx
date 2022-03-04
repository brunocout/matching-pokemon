import React from 'react';
import CardGame from '../../components/CardGame/CardGame';

import './CardFrontBack.css'

const CardFrontBack = ({icon, alt}) => {

    const handleOnClick = (e) => {
        const cardFrontBack = e.target.closest('.card-front-back')
        cardFrontBack.classList.toggle('-active')
    }

    return ( 
    <div className="card-front-back" onClick={e=>handleOnClick(e)}>
        <div className="card -front">
            <CardGame icon={'pokebola'} alt={'pokebola'} />
        </div>
        <div className="card -back" data-color={icon}>
            <CardGame icon={icon} alt={alt}/>
        </div>
    </div> );
}
 
export default CardFrontBack;