import React from 'react';
import preview from '../../../img/sofa.png';

import './Preview.scss'

const Preview = () => {
  return ( 
    <section className='services__preview preview'>
      <img src={preview} alt="Превью" className='preview__img'/>
    </section>
  );
}
 
export default Preview;