import React from 'react';

const ServicesItem = (props) => {
    return ( 
        <button className='link'>
            <span>
                {props.service.title}
            </span>
        </button>
    );
}
 
export default ServicesItem;