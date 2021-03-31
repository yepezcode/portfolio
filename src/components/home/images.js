import React from 'react';
import Table from '../../static/images3d/table.png';
import Laptop from '../../static/images3d/laptop_S.png';
import Plant from '../../static/images3d/tablePlant_S.png';

export const Images = () => {
    return (
        <div className="image__container">
            <img loading="lazy" className="image__table-images" src={ Table } alt="table"/>

            <img loading="lazy" className="image__laptop" src={ Laptop } alt="laptop"/>
            <img loading="lazy" className="image__plant" src={ Plant } alt="plant"/>
      
        </div>
)}
