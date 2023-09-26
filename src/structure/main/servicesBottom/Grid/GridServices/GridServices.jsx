import React from 'react';
import santech from '../../../../../img/_grid/santech.png'
import building from '../../../../../img/_grid/building.png'
import household from '../../../../../img/_grid/household.png'
import pet from '../../../../../img/_grid/pet.png'
import tools from '../../../../../img/_grid/tools.png'
import docs from '../../../../../img/_grid/docs.png'

// Styles
import './Grid.scss'

const GridServices = () => {
    return (
        <>
            <button className='services__list_bottom_right-block grid__service'>
                <div className='grid__icon'>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                </div>
                <img src={santech} alt="Сантехника"
                className='grid__service__img'/>
                <span className='grid__service__title'>Ванна и душ</span>
            </button>
            <button className='services__list_bottom_right-block grid__service'>
                <div className='grid__icon'>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                    <div className='grid__icon__brick yellow'></div>
                </div>
                <img src={building} alt="Сантехника" className='grid__service__img'/>
                <span className='grid__service__title'>Окна и балконы</span>
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
                <span className='grid__service__title'>Двери</span>
            </button>
            <button className='services__list_bottom_right-block grid__service'>
                <div className='grid__icon'>
                    <div className='grid__icon__brick blue'></div>
                    <div className='grid__icon__brick blue'></div>
                    <div className='grid__icon__brick blue'></div>
                    <div className='grid__icon__brick blue'></div>
                </div>
                <img src={tools} alt="Сантехника" className='grid__service__img'/>
                <span className='grid__service__title'>Электроприборы</span>
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
        </>
    );
}
 
export default GridServices;