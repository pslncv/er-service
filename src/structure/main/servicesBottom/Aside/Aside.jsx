import React, { useState } from 'react';
import AsideButton from './AsideButton';

// Styles
import './Aside.scss'

const Aside = () => {

    const [buttons] = useState([
        {id: 1, title: 'Ремонт',},
        {id: 2, title: 'Чистота',},
        {id: 3, title: 'Новинки',},
        {id: 4, title: 'Акции',},
    ])

    return (
        <aside className='aside'>
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