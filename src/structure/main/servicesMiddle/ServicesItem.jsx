import React from 'react';

const ServiceItem = (props) => {
    return (  
        <div className='services__list_middle-item'>
            <div className={`services__list_middle-title-${props.service.id}`}>
                <span className='services__list_middle-name'>{props.service.title}</span>
                <span className='services__list_middle-price'>{props.service.price}</span>
            </div>
            <button className='services__list_middle-button'>
                <span>Заказать</span>
            </button>
        </div>
    );
}
 
export default ServiceItem;