import React from 'react';

const ServicesItem = (props) => {
    return ( 
        <button className='services__list-item'>
            <span>
                {props.service.title}
            </span>
        </button>
    );
}
 
export default ServicesItem;