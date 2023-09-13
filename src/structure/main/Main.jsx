import React from 'react';
import ServicesListTop from './servicesTop/ServicesListTop';
import ServicesListMiddle from './servicesMiddle/ServicesListMiddle';
import ServiceListBottom from './servicesBottom/ServiceListBottom';
import Preview from './preview/Preview';

const Main = () => {
    return ( 
        <main  className='main services'>
            <ServicesListTop />
            <Preview />
            <ServicesListMiddle />
            <ServiceListBottom />
        </main>
    )
}
 
export default Main;