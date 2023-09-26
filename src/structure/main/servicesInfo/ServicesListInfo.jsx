import React, { useState } from 'react';
import ServicesInfoItem from './ServicesInfoItem';

// Styles
import './ServicesInfo.scss'

const ServicesListInfo = () => {

  const [infos] = useState([
    {
      id: 1,
      title: 'Новости и новинки',
      image: 'Новости',
    },
    {
      id: 2,
      title: 'Выездная консультация',
      image: 'Консультация',
    },
    {
      id: 3,
      title: 'Советы по ремонту',
      image: 'Советы',
    },
  ])

  return (

    <section className='services_info'>
      {infos.map(info  => 

        <ServicesInfoItem
          key={info.id}
          title={info.title}
          image={info.image}
        />

      )}
    </section>

  );
}
 
export default ServicesListInfo;