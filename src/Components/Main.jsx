import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { groupBy } from './../utils'
import ProductDisplay from './../containers/ProductDisplay';
import Filter from './../Components/Filters/Filter'

export const ProductContext = React.createContext([{}, () => {}]);

const Main = () => {
    const [allProductList, setProductList] = useState({
        CategoriedProds: [],
        OtherProducts: [],
        CurrentProdList:[]
    });

    useEffect(() => {
        axios.get('/products')
            .then(res => {
                const data = groupBy([...res.data], 'category');
                setProductList(
                    {
                        CategoriedProds: data.filter(prod => (prod.key !== null)),
                        OtherProducts: data.filter(prod => prod.key == null)[0].values,
                        CurrentProdList: data.filter(prod => (prod.key !== null))
                    }
                );
            })
        return () => {
            console.log("cleanup");
        };
    }, []);

    return (
        <ProductContext.Provider value={[allProductList, setProductList]}>

            <div className="row">
            <Filter/>
            <ProductDisplay />
            </div>
        </ProductContext.Provider>
    );
};

export default Main;