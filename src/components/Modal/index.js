import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import close from '../../assets/images/icon-close.svg';
import ImageGallery from '../ImageGallery';

import { isModalClose } from '../../features/modal/modalSlice';

const Modal = () => {
    const isOpen = useSelector((state) => state.isModalOpen.value)
    const dispatch = useDispatch();

    return (
        <div id="myModal" className={isOpen ? 'modal active' : 'modal'}>    
            <div className='modal-content'>
                <span className="close" onClick={() => dispatch(isModalClose())}>
                    <img src={close} alt="" />
                </span>        
                <ImageGallery />
            </div>
        </div> 
    );
};

export default Modal;