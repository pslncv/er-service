import React from 'react';
import ServicesListTop from './servicesTop/ServicesListTop';
import ServicesListMiddle from './servicesMiddle/ServicesListMiddle';
import ServiceListBottom from './servicesBottom/ServiceListBottom';

const Main = () => {
    return ( 
        <main className='main services'>
            <ServicesListTop />
            <ServicesListMiddle />
            <ServiceListBottom />
        </main>
    )
}
 
export default Main;