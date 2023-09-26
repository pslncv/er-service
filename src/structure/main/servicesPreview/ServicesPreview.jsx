import React from 'react';
import previewSofa from '../../../img/sofa.png';
import previewLogo from '../../../img/logo-mini.png';

import './ServicesPreview.scss'

const ServicesPreview = () => {
  return ( 
    <section className='services_preview'>
      <img src={previewSofa} alt="Превью" className='background'/>
      <div className='content'>
        <div className='mission'>
          <button className='button'>
            <span className='button__text'>Миссия компании</span>
          </button>
        </div>
        <div className='logo'>
          <div className='img'>
            <img src={previewLogo} alt="Эрмитаж Сервис"/>
          </div>
          <div className='text'>
            <h1 className='text__title'>Более <span>100</span> услуг по<br/>привлекательным ценам</h1>
            <h2 className='text__subtitle'>От уборки квартиры до установки ванны</h2>
          </div>
          <div className='search'>
            <input type="text" placeholder='введите адрес, чтобы проверить подключение дома к эрмитаж-сервис:' className='input'/>
            <button className='button'>
              <span>Проверить</span>
            </button>
          </div>
        </div>
        <div className='services'>
          <button className='button'>
            <span className='button__text'>Наши<br/>услуги</span>
          </button>
        </div>
      </div>
    </section>
  );
}
 
export default ServicesPreview;