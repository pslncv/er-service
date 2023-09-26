import React, { useState } from 'react';
import Slide from './Slide';
import SliderButton from './SliderButton';

// Images
// import * as Img from '../../../../../img/_slider'

// Styles
import './Slider.scss'

const Slider = () => {

    const [slider, setSlider] = useState([
        {
            id: 1,
            alt: 'Скидка 10% на работы',
            image: 'Скидки'
        },
        {
            id: 2,
            alt: 'Акция "Приведи друга"',
            image: 'Друзья'
        },
        {
            id: 3,
            alt: 'Скидка 10% на работы',
            image: 'Скидки'
        },
        {
            id: 4,
            alt: 'Акция "Приведи друга"',
            image: 'Друзья'
        },
    ])

    const [index, setIndex] = useState(0)
    
    return (
        <div className='slider'>
            <div className='slider__container'>
                {slider.map(slide => 
                    <Slide
                        key={slide.id}
                        id={slide.id}
                        alt={slide.alt}
                        image={slide.image}
                    />
                )}
            </div>
            <div className='slider__buttons'>
                    {slider.map(slide =>
                        <SliderButton
                            key={slide.id}
                        />
                    )}
            </div>
        </div>
    );
}
 
export default Slider;