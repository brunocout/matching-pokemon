import React from 'react';

import './VsPlayer.css'

const VsPlayer = ({ player = 'vs' }) => {
    return <span className='vs-player'>{player}</span>
}
 
export default VsPlayer;