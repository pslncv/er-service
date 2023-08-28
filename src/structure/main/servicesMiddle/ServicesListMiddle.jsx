import React, { useState } from 'react';
import ServicesItem from '../servicesMiddle/ServicesItem';

const ServicesListMiddle = () => {

    const [services] = useState ([
        {id: 1, title: 'Установка смесителя', price: '500 р'},
        {id: 2, title: 'Проверка счетчиков', price: '700 р'},
        {id: 3, title: 'Клининг квартиры', price: '900 р'},
        {id: 4, title: 'Установка кондиционера', price: '1500 р'},
        {id: 5, title: 'Магнитный ключ', price: '500 р'},
        {id: 6, title: 'Повесить\nполку', price: '500 р'}
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