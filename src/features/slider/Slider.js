import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SliderData } from './SliderData';
import prevArrow from '../../assets/images/icon-previous.svg';
import nextArrow from '../../assets/images/icon-next.svg';
import { prevSlide, nextSlide } from '../thumbnail/thumbnailSlice';
import { currentThumb } from '../thumbnail/thumbnailSlice';

import { isModalOpen } from '../modal/modalSlice';

export default function Slider() {
  const currentThumbnail = useSelector(currentThumb)
  const dispatch = useDispatch();

  return (
    <div className='slider' onClick={() => dispatch(isModalOpen())}>
        <div className='arrow left-arrow' onClick={() => dispatch(prevSlide())}>
            <img src={prevArrow} alt="" />
        </div>
        <div className='arrow right-arrow' onClick={() => dispatch(nextSlide())}>
            <img src={nextArrow} alt="" />
        </div>
        {SliderData.map((slide, index) => {
            return (
                <div className={index === currentThumbnail ? 'slide active' : 'slide'} key={index}>
                    {index === currentThumbnail ? (<img src={slide.image} alt="" className='image'/>) : (<img src={slide.image} alt="" className='image'/>)}
                    {/* {index === currentThumbnail && (<img src={slide.image} alt="" className='image'/>)} */}
                </div>
            )
        })}
    </div>
  )
}