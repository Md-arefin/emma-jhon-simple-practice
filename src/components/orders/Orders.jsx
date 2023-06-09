import { faCreditCardAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const savedCart = useLoaderData();
    // console.log(products);

    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        // console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]) ;
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-products-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart ={handleRemoveFromCart}
                    ></ReviewItem>
                    )}
            </div>

            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link to='/checkOut'>
                    <button className='btn-proceed'>Proceed checkOut
                    <FontAwesomeIcon className='arrow-icon' icon={faCreditCardAlt} />
                    </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;