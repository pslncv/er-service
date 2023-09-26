import React, { useState } from 'react';
import ServicesItem from '../servicesMiddle/ServicesItem';

// Styles
import './ServicesMiddle.scss'

const ServicesListMiddle = () => {

    const [services] = useState ([
        {
            id: 1,
            title: 'Установка смесителя',
            img: 'Смеситель',
            price: '2000 р'
        },
        {
            id: 2,
            title: 'Смена счетчиков',
            img: 'Счетчик',
            price: '1000 р'}
            ,
        {
            id: 3,
            title: 'Клининг квартиры',
            img: 'Уборка',
            price: '4500 р'}
            ,
        {
            id: 4,
            title: 'Регулировка входной двери',
            img: 'Регулировка',
            price: '2500 р'}
            ,
        {
            id: 5,
            title: 'Установка розетки',
            img: 'Розетка',
            price: '600 р'}
            ,
        {
            id: 6,
            title: 'Повесить\nполку',
            img: 'Полка',
            price: '500 р'}
    ])

    return (

        <section className='services_middle'>
            {services.map(service =>
            
                <ServicesItem
                    key={service.id}
                    img={service.img}
                    title={service.title}
                    price={service.price}
                />

            )}
        </section>
    );
}
 
export default ServicesListMiddle;