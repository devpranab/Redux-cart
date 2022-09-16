import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, id} = props.product;
    return (
        <div className="product">
            <h5>{name}</h5>
            <button>add to cart</button>
        </div>
    );
};

export default Product;