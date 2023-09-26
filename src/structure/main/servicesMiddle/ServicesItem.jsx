import React from 'react';
import * as Img from '../../../img/servicesMiddle/Img.jsx'

const ServiceItem = (props) => {
    return (  
        <div className='item'>
            <div className='image'>
                <img src={Img[`${props.img}`]} alt={props.title}/>
            </div>
            <div className='text'>{props.title}</div>
            <div className='price'>{props.price}</div>
        </div>
    );
}
 
export default ServiceItem;