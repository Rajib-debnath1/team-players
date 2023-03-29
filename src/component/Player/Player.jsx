import React from 'react';
import './Player.css'
const Player = (props) => {
    const {id, name, price, img} = props.player;
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
        </div>

    );
};

export default Player;