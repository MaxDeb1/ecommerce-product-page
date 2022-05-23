import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import trash from '../../assets/images/icon-delete.svg';
import item from '../../assets/images/image-product-1-thumbnail.jpg';

import { remove } from '../../features/cartBtns/cartContentSlice';
import { closeCart } from '../../features/cartBtns/cartBoxSlice';

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = e => {
      if(!e.target.parentNode.classList.contains("cart") && !domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);
    
    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    }
  });

  return domNode
}

export default function Cart() {
  const isOpen = useSelector((state) => state.isCartOpen.value)
  const items = useSelector((state) => state.isCartEmpty.items)
  const dispatch = useDispatch();

  let domNode = useClickOutside(() => {
      dispatch(closeCart());
  })

  return (
    <div ref={domNode} className={isOpen ? 'Cart-Container active' : 'Cart-Container'}>
        <header>Cart</header>
        <div className={(items === "") ? 'cart-box' : 'cart-box fill'}>
          <div className="cart-empty"> Your cart is empty.</div>
          <div className='cart-filled'>
            <div className='cart-content flex'>
              <div className="image-box">
                  <img src={item} alt="" />
              </div>
              <div className="about">
                <div className="title">Autumn Limited Edition Sneakers</div>
                <div className="price flex">
                    <div className="price-item">$125.00</div>
                    <div className="counter">x {items}</div>
                    <div className="total">${125.00 * items}.00</div>
                </div>
              </div>
              <button className="remove" onClick={() => dispatch(remove())}>
                <img src={trash} alt="" />
              </button>
            </div>
            <button className='primary-btn'>Checkout</button>
          </div>
        </div>
    </div>
  )
}