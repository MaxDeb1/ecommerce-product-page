import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThumbnailData } from './ThumbnailData';
/* import { currentSlide } from '../slider/sliderSlice'; */
import { selectSlide, currentThumb } from '../thumbnail/thumbnailSlice';

export default function Thumbnail() {
  const current = useSelector(currentThumb)
  const dispatch = useDispatch();

  return (
    <div className='thumb-list'>
        {ThumbnailData.map((thumbnail, index) => {
            return (
              <img id={index} src={thumbnail.image} alt="" className={index === current ? 'thumbnail active' : 'thumbnail'} key={index} onClick={(e)=> dispatch(selectSlide(Number(e.target.id)))}
              />
            )
        })}
    </div>
  )
}