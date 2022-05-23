import React from 'react';
import Cart from '../../components/Cart';
import ImageGallery from '../../components/ImageGallery';
import Item from '../../components/Item';
import Modal from '../../components/Modal';

export default function Collections() {
    return (
        <React.Fragment>
            <Cart />
            <main className='main-content flex'>
              <ImageGallery />
              <Modal />
              <Item />
            </main>
        </React.Fragment>
    );
}