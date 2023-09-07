import React, { useState } from 'react';
import ServicesItem from './ServicesItem';

const ServicesListTop = () => {

    const [services] = useState ([
        {id: 1, title: 'Сантехника'},
        {id: 2, title: 'Электрика'},
        {id: 3, title: 'Документация'},
        {id: 4, title: 'Уборка'},
        {id: 5, title: 'Бытовые работы'},
    ])

    return ( 
        <section className='services__list_top'>
            {services.map(service => 
                <ServicesItem
                    service={service}
                    key={service.id}
                />
            )}
        </section>
     );
}
 
export default ServicesListTop;