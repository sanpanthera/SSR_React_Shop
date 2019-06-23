import React from 'react';
import styles from './ProductCard.scss';
import StarRatingComponent from 'react-star-rating-component';
import { faMinus, faPlus, faStar , faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = product => {
    const noImageUrl = "/assets/noImage.png";
    return (
        <div className='card' >
            <img src={product.thumbnail || noImageUrl} className='card-img-top imgMod' alt='...' />

            <div className="card-body">
                <h5 className="card-title">{product.name}
                    <span title={product.description} style={{cursor:'pointer'}}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </span>
                </h5>
                <StarRatingComponent name="rate2" editing={false}
                    renderStarIcon={() => <span><FontAwesomeIcon icon={faStar} /></span>}
                    starCount={5}
                    value={+product.ratingInfo.rating} />
                     <span>({+product.ratingInfo.userCount})</span>
                <div style={{ fontSize: '22px' }}>${product.price}.00</div>
                <button type="button" className="btn btn-dark">Add to cart</button>
                
                <span style={{ marginLeft: '20px' }}>
                    <span><button type="button"><FontAwesomeIcon icon={faMinus} /></button></span>
                    <input type="text" style={{ width: '21px', marginLeft: '4px', marginRight: '4px' }} />
                    <span><button type="button" ><FontAwesomeIcon icon={faPlus} /></button></span>
                </span>
            </div>
        </div>
    );
};

export default ProductCard;
