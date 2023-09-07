import React from 'react';
import GridServices from './GridServices/GridServices';
import Slider from './Slider/Slider';

const Grid = () => {
    return (
        <div className='services__list_bottom_right grid'>
            <Slider />
            <GridServices />
        </div>
    );
}
 
export default Grid;