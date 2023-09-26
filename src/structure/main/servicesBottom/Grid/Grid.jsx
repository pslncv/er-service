import React from 'react';
import GridServices from './GridServices/GridServices';
import Slider from './Slider/Slider';

const Grid = () => {
    return (
        <div className='grid'>
            <Slider />
            <GridServices />
        </div>
    );
}
 
export default Grid;