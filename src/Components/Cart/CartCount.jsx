import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const CartCount = () => {
    return (
        <div className="my-2 my-sm-0">
            <FontAwesomeIcon icon={ faShoppingCart } size="2x" color="#fff"/>
        </div>
    );
};

export default CartCount;