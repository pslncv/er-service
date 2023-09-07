import React from 'react';
import Aside from './Aside/Aside.jsx';
import Grid from './Grid/Grid.jsx';

const ServiceItem = () => {
    return (
        <section className='services__list_bottom'>
            <Aside />
            <Grid />
        </section>
    );
}
 
export default ServiceItem;