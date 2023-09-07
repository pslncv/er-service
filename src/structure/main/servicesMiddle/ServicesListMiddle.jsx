import React, { useState } from 'react';
import ServicesItem from '../servicesMiddle/ServicesItem';

const ServicesListMiddle = () => {

    const [services] = useState ([
        {id: 1, title: 'Установка смесителя', price: '1800 р'},
        {id: 2, title: 'Смена счетчиков', price: '1000 р'},
        {id: 3, title: 'Клининг квартиры', price: '900 р'},
        {id: 4, title: 'Установка кондиционера', price: '2500 р'},
        {id: 5, title: 'Установка розетки', price: '600 р'},
        {id: 6, title: 'Повесить\nполку', price: '500 р'}
    ])

    return ( 
        <section className='services__list_middle'>
            {services.map(service => 
                <ServicesItem
                    service={service}
                    key={service.id}
                />
            )}
        </section>
    );
}
 
export default ServicesListMiddle;