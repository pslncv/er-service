import React, { useState } from 'react';
import ServicesItem from '../servicesMiddle/ServicesItem';

const ServicesListMiddle = () => {

    const [services] = useState ([
        {id: 1, title: 'Установка смесителя',},
        {id: 2, title: 'Проверка счетчиков',},
        {id: 3, title: 'Клининг квартиры',},
        {id: 4, title: 'Установка кондиционера',},
        {id: 5, title: 'Магнитный ключ',},
        {id: 6, title: 'Повесить\nполку',}
    ])

    return ( 
        <div className='services__list_middle'>
            {services.map(service => 
                <ServicesItem
                    service={service}
                    key={service.id}
                />
            )}
        </div>
    );
}
 
export default ServicesListMiddle;