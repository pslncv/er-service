import React from 'react';
import Right from './Right';
import Left from './Left';

const ServiceItem = () => {
    return (
        <section className='services__list_bottom'>
            <Left />
            <Right />
        </section>
    );
}
 
export default ServiceItem;