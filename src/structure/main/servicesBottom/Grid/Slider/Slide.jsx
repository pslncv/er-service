import React from 'react';

// Images
import * as Img from '../../../../../img/_slider/Slider'

const Slide = (slide) => {
    return (   
        <a href="/" className={`slider__shares slider__share-${slide.id}`}>
            <img src={Img[`${slide.image}`]} alt={slide.alt} className='slider__image'/>
        </a>
    );
}
 
export default Slide;