import React from 'react';

const ServiceItem = (props) => {
    return ( 
        <div className='services__list_middle-item'>
            <span>{props.service.title}</span>
        </div>
    );
}
 
export default ServiceItem;