import React, { useEffect, useState } from 'react';
import Information from '../Information/Information';
import Player from '../Player/Player';
import './Players.css';


const Players = () => {
    
    const [players, setPlayers] = useState([]);

    const [cart, setCart] = useState([]);
    console.log(cart)

    useEffect(()=>{
        fetch('generated.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    
    
    
    const handlePlayer =(player) =>{
        const newCart = [...cart,player]
        setCart(newCart);
    }

    return (
        <div>
            <h2 className='Players-title'>We are Bangladesh team Players</h2>
          <div className="players-container">
          <div className='players'>
           {
                players.map(player =><Player 
                    key={player.id}
                    player={player}
                    handlePlayer = {handlePlayer}
                    ></Player> )
            }
           </div>

           <div>
                <Information cart={cart}></Information>
           </div>
          </div>
            
        </div>

    );
};

export default Players;