import React, { useContext } from 'react';
import ProductCard from './../ProductCard/ProductCard'
import { ProductContext } from './../Main'

const CategoriedProd = () => {
    const [prodContext,SetProdContext] = useContext(ProductContext);
   
    return (
        <React.Fragment>
            {
                prodContext.CurrentProdList.map(cat => {
                    return <div key={cat.key} >
                        <h2>{cat.key}</h2>
                        <div className="row" >
                            {
                                cat.values.map(prod=> {
                                  return <div key={prod._id} className="col-sm-4"><ProductCard {...prod} /></div>
                                })
                            }
                        </div>
                    </div>
                })
            }
        </React.Fragment>
    );
};

export default CategoriedProd;