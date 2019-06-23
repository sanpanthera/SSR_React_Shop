import React from 'react';
import CategoriedProd from './../Components/CategoriedProd/CategoriedProd'
import ProdCarousel from '../Components/ProdCarousel/ProdCarousel'

const ProductDisplay = () => {
    return (
        <div className="col-sm-9">
            <CategoriedProd/>
            <ProdCarousel />
        </div>
    );
};

export default ProductDisplay;