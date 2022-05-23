import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import minus from '../../assets/images/icon-minus.svg';
import plus from '../../assets/images/icon-plus.svg';
import { decrement, increment, selectCount } from './counterSlice';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className='quantity flex'>
        <div className='selector' onClick={() => dispatch(decrement())}>
            <img src={minus} alt="" />
        </div>
        <div className='number bold'>{count}</div>
        <div className='selector' onClick={() => dispatch(increment())}>
            <img src={plus} alt="" />
        </div>
    </div>
  )
}
