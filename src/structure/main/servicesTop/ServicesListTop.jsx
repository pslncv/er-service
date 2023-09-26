import React, { useState } from 'react';
import ServicesItem from './ServicesItem';

//Styles
import './ServicesTop.scss'

const ServicesListTop = () => {

    const [services] = useState ([
        {id: 1, title: 'Каталог'},
        {id: 2, title: 'Сантехника'},
        {id: 3, title: 'Электрика'},
        {id: 4, title: 'Отопление'},
        {id: 5, title: 'Клининг'},
        {id: 6, title: 'Сервис на час'},
    ])

    return ( 
        <section className='services_top'>
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