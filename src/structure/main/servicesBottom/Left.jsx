import React from 'react';

const Left = () => {
    return (
        <div className='services__list_bottom_left'>
            <button className='services__list_bottom_left-block'>
                <span className='services__list_bottom_left-title'>Ремонт</span>
            </button>
            <button className='services__list_bottom_left-block'>
                <span className='services__list_bottom_left-title'>Чистота</span>
            </button>
            <button className='services__list_bottom_left-block'>
                <span className='services__list_bottom_left-title'>Комфорт сервис</span>
            </button>
            <button className='services__list_bottom_left-block'>
                <span className='services__list_bottom_left-title'>Аренда</span>
            </button>
        </div>
    );
}
 
export default Left;