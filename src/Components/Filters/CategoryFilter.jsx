import React, { useRef, useContext } from 'react';
import { ProductContext } from './../Main'

const CategoryFilter = () => {

    const liElem = useRef(null);
    const [prodContext, SetProdContext] = useContext(ProductContext);

    const handleClick = (event) => {
        const categoryName = event.target.childNodes[0].data;
        const selectedCat = prodContext.CategoriedProds.filter(cat => cat.key === categoryName);
        SetProdContext({
            ...prodContext,
            CurrentProdList: selectedCat
        })
    }

    const allHandleClick = () => {
        SetProdContext({
            ...prodContext,
            CurrentProdList: [...prodContext.CategoriedProds]
        })
    }

    return (
        <ul className="list-group">
            <li 
                onClick={() => { allHandleClick() }}
                style={{ cursor: 'pointer' }}
                className="list-group-item d-flex justify-content-between align-items-center">
                All
            </li>
            {
                prodContext.CategoriedProds && prodContext.CategoriedProds.map(cat => {
                    return <li key={cat.key}
                        onClick={(event) => { handleClick(event) }}
                        style={{ cursor: 'pointer' }}
                        ref={liElem}
                        className="list-group-item d-flex justify-content-between align-items-center">
                        {cat.key}
                        <span className="badge badge-dark badge-pill">{cat.values.length}</span>
                    </li>
                })
            }

        </ul>
    );
};

export default CategoryFilter;