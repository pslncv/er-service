import React, { useState } from 'react';
import AsideButton from './AsideButton';

const Aside = () => {

    const [buttons] = useState([
        {id: 1, title: 'Ремонт',},
        {id: 2, title: 'Чистота',},
        {id: 3, title: 'Новинки',},
        {id: 4, title: 'Акции',},
    ])

    return (
        <aside className='services__list_bottom_left'>
            {buttons.map(button =>
                <AsideButton 
                    button={button}
                    key={button.id}
                    title={button.title}
                />
            )}
        </aside>
    );
}
 
export default Aside;