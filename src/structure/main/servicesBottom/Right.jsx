import React from 'react';
import santech from '../../../img/_grid/santech.png'
import building from '../../../img/_grid/building.png'
import household from '../../../img/_grid/household.png'
import pet from '../../../img/_grid/pet.png'
import tools from '../../../img/_grid/tools.png'
import docs from '../../../img/_grid/docs.png'

const Right = () => {
    return (
        <div className='services__list_bottom_right grid'>
            <div className='services__list_bottom_right-slider slider'>
                <span className='slider__title'>Акции</span>
                <div className='slider__buttons'>
                    <button className='slider__button'></button>
                    <button className='slider__button'></button>
                    <button className='slider__button'></button>
                </div>
            </div>
            <button className='services__list_bottom_right-block grid__service'>
                <div className='grid__icon'>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                </div>
                <img src={santech} alt="Сантехника"
                className='grid__service__img'/>
                <span className='grid__service__title'>Сантехника</span>
            </button>
            <button className='services__list_bottom_right-block grid__service'>
                <div className='grid__icon'>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                </div>
                <img src={building} alt="Сантехника" className='grid__service__img'/>
                <span className='grid__service__title'>Строительные
    работы</span>
            </button>
            <button className='services__list_bottom_right-block grid__service'>
                <div className='grid__icon'>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                </div>
                <img src={household} alt="Сантехника" className='grid__service__img'/>
                <span className='grid__service__title'>Бытовая<br/>техника</span>
            </button>
            <button className='services__list_bottom_right-block grid__service'>
                <div className='grid__icon'>
                    <div className='grid__icon__brick green'></div>
                    <div className='grid__icon__brick green'></div>
                    <div className='grid__icon__brick green'></div>
                    <div className='grid__icon__brick green'></div>
                </div>
                <img src={pet} alt="Сантехника" className='grid__service__img'/>
                <span className='grid__service__title'>Все для 
    питомцев</span>
            </button>
            <button className='services__list_bottom_right-block grid__service'>
                <div className='grid__icon'>
                    <div className='grid__icon__brick blue'></div>
                    <div className='grid__icon__brick blue'></div>
                    <div className='grid__icon__brick blue'></div>
                    <div className='grid__icon__brick blue'></div>
                </div>
                <img src={tools} alt="Сантехника" className='grid__service__img'/>
                <span className='grid__service__title'>Инструменты</span>
            </button>
            <button className='services__list_bottom_right-block grid__service'>
                <div className='grid__icon'>
                    <div className='grid__icon__brick green'></div>
                    <div className='grid__icon__brick green'></div>
                    <div className='grid__icon__brick green'></div>
                    <div className='grid__icon__brick green'></div>
                </div>
                <img src={docs} alt="Сантехника" className='grid__service__img'/>
                <span className='grid__service__title'>Согласование проектов</span>
            </button>
        </div>
    );
}
 
export default Right;