import React from 'react';

// Top
import ServicesListTop from './servicesTop/ServicesListTop';

// Preview
import ServicesPreview from './servicesPreview/ServicesPreview';

// Middle
import ServicesListMiddle from './servicesMiddle/ServicesListMiddle';

// Info
import ServicesListInfo from './servicesInfo/ServicesListInfo';

// Bottom
import ServiceListBottom from './servicesBottom/ServiceListBottom';

const Main = () => {
    return ( 
        <main className='main services'>
            <ServicesListTop />
            <ServicesPreview />
            <ServicesListMiddle />
            <ServicesListInfo />
            <ServiceListBottom />
        </main>
    )
}
 
export default Main;