import React from 'react';
import * as Img from '../../../img/servicesInfo/Img'

const ServicesInfoItem = (props) => {
  return (
    <div className='item'>
      <a className='item__link'>
        <img src={Img[`${props.image}`]} alt={props.title} className='item__img'/>
        <div className='item__title'>
          <span>{props.title}</span>
        </div>
      </a>
    </div>
  );
}
 
export default ServicesInfoItem