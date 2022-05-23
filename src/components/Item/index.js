import React from 'react';
import { useDispatch } from 'react-redux';
import cart from '../../assets/images/icon-cart.svg';
import Counter from '../../features/counter/Counter';

import { add } from '../../features/cartBtns/cartContentSlice';
import { restoreDefault } from '../../features/counter/counterSlice';

export default function Item() {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
        <div className="item-details">
            <div className='item-brand uppercase'>sneaker company</div>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

            <div className='price'>
                <div className='sell-price flex'>
                    <div className='reduced-price bold'>$125.00</div>
                    <div className='discount bold'>50%</div>
                </div>
                <div className='original-price'>$250.00</div>
            </div>

            <div className='item-selection flex'>
                <Counter />
                <button className='primary-btn flex' onClick={() => dispatch(add()) & dispatch(restoreDefault())}>
                    <img src={cart} alt="" />
                    Add to cart
                </button>
            </div>
        </div>
      </React.Fragment>
  )
}

