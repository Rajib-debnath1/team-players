import React from 'react';
import './Information.css'

const Information = (props) => {
    const cart = props.cart;

    let totalPrice = 0;
    for(const player of cart){
      totalPrice = totalPrice + player.price;
      
    }
    return (
        <div className='information'>
            <h4>Player Details</h4>
            <div>
                <p>Name:</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Players: {cart.length}</p>
                
            </div>
        </div>
    );
};

export default Information;