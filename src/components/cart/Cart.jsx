import React from 'react';
import './Cart.css';


const Cart = (props) => {
    // const cart = props.cart;  Option 1 
    // const {cart} = props;  Option 2
    const {cart} = props; 

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1
        // }
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    let Tax = totalPrice * 7 / 100;
    let grandTotal = totalPrice + totalShipping + Tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Select items: {quantity}</p>
            <p>totalPrice Price: ${totalPrice}</p>
            <p>totalPrice Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${Tax.toFixed(2)}</p>
            <h6>Grand totalPrice: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;