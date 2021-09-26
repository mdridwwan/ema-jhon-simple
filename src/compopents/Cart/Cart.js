import React from 'react';

const CART = (props) => {
    const{cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const shipping = 10;
    const tax = (total+ shipping) *10;
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items ordered:{props.cart.length}</h4>
            <br />
            <p>Shipping & Handling: {shipping}</p>
            <p>tax: {tax}</p>
            <h3>Total: {total.toFixed(2)}</h3>

        </div>
    );
};

export default CART;