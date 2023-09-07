import React from 'react';

const Slide = (slide) => {
    return (   
        <div className={`slider__shares slider__share-${slide.id}`}>
           <span>{slide.title}</span>
        </div>
    );
}
 
export default Slide;