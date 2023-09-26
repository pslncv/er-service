import React from 'react';

const AsideButton = (button) => {
    return (
        <button className='aside__link'>
            <span className='aside__title'>{button.title}</span>
        </button>
    );
}
 
export default AsideButton;