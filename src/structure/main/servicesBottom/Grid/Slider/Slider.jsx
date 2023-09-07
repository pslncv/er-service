import React, { useState } from 'react';
import Slide from './Slide';
import SliderButton from './SliderButton';

const Slider = () => {

    const hundleMoveSlide = () => {
        console.log(123);
    }

    const [slider] = useState([
        {id: 1, title: 'Розетки и выключатели',},
        {id: 2, title: 'Акция 2',},
        {id: 3, title: 'Акция 3',},
    ])
    
    return (
        <div className='services__list_bottom_right-slider slider'>
            <div className='slider__container'>
                {slider.map(slide => 
                    <Slide
                        slide={slide}
                        title={slide.title}
                        key={slide.id}
                        id={slide.id}
                    />
                )}
            </div>
            <div className='slider__buttons'>
                    {slider.map(slide =>
                        <SliderButton
                            button={slide}
                            key={slide.id}
                            onClick={hundleMoveSlide}
                        />
                    )}
            </div>
        </div>
    );
}
 
export default Slider;