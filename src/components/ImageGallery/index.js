import React from 'react';
import Slider from '../../features/slider/Slider';
import Thumbnail from '../../features/thumbnail/Thumbnail';

const ImageGallery = () => {
  return (
    <div className='gallery-container'>
        <Slider />
        <Thumbnail />
    </div>
  )
}

export default ImageGallery