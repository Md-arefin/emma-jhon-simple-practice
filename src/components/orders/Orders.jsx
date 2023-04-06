import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const cart = useLoaderData();
    // console.log(products);

    return (
        <div className='shop-container'>
            <div className='review-products-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                    ></ReviewItem>
                    )}
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;