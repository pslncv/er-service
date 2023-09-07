import React from 'react';

const AsideButton = (button) => {
    return (
        <button className='services__list_bottom_left-block'>
            <span className='services__list_bottom_left-title'>{button.title}</span>
        </button>
    );
}
 
export default AsideButton;