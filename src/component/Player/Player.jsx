import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolfBall } from '@fortawesome/free-solid-svg-icons';
import './Player.css'
const Player = (props) => {
    console.log(props)
    const {id, name, price, img} = props.player;
    const handlePlayer = props.handlePlayer;


    return (
        <div className='player'>
            <div>
            <img src={img} alt=''></img>
            </div>
            <div className="player-info">
                <h4>Name: {name}</h4>
                <h5>Id: {id}</h5>
                <h5>Price: {price}tk</h5>
            </div>
            <button onClick={()=>handlePlayer(props.player)} className='player-btn'>Higher Player <FontAwesomeIcon icon={faGolfBall} /></button>
        </div>

    );
};

export default Player;