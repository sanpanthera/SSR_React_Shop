import React, { useContext } from "react";
import Slider from "react-slick";
import './ProdCarousel.scss'
import ProductCard from '../ProductCard/ProductCard';
import { ProductContext } from './../Main'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
               display: "block", 
               background: "#343a40", 
               width: '34px',
               height: '39px',
               padding: '10px 10px 0 8px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", 
                   background: "#343a40", 
                   width: '34px',
                   height: '39px',
                   left:'-32px',
                   padding: '10px 10px 10px 8px' }}
      onClick={onClick}
    />
  );
}

const ProdCarousel = () => {
  const settings = {
    className: "slider variable-width modify",
    infinite: false,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const [prodContext,SetProdContext] = useContext(ProductContext);
  return (
    <div style={{ height: 500 }} >
      <h2> Other Products </h2>
      <Slider {...settings}>
        {
           prodContext.OtherProducts.map(prod => 
            {return <div key={prod._id} className="pr-2" style={{ width: 350, border: '2px solid green' }}>
              <ProductCard key={prod._id}  {...prod} />
            </div>}
          )
        }
      </Slider>
    </div>
  );
};

export default ProdCarousel;