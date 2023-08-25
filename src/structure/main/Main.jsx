import React from 'react';
import ServicesListTop from './servicesTop/ServicesListTop';
import ServicesListMiddle from './servicesMiddle/ServicesListMiddle';

const Main = () => {
    return ( 
        <main className='body'>
            <ServicesListTop />
            <ServicesListMiddle />
        </main>
    )
}
 
export default Main;