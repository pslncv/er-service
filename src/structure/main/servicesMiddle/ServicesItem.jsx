import React from 'react';

const ServiceItem = (props) => {
    return (
        <>        
            <div className='services__list_middle-item'>
                <div className='services__list_middle-title'>
                    <span>{props.service.title}</span>
                </div>
                <button className='services__list_middle-button'>
                    <span>Заказать</span>
                </button>
            </div>
        </>
    );
}
 
export default ServiceItem;