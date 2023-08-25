import React, { useState } from 'react';
import ServicesItem from './ServicesItem';

const ServicesListTop = () => {

    const [services] = useState ([
        {id: 1, title: 'Раздел услуг'},
        {id: 2, title: 'Раздел услуг'},
        {id: 3, title: 'Раздел услуг'},
        {id: 4, title: 'Раздел услуг'},
        {id: 5, title: 'Раздел услуг'},
    ])

    return ( 
        <section className='body__services services'>
            <div className='services__list_top'>
                {services.map(service => 
                    <ServicesItem
                        service={service}
                        key={service.id}
                    />
                )}
            </div>
        </section>
     );
}
 
export default ServicesListTop;