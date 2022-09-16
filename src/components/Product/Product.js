import React from 'react';
import './Product.css';

const Product = (props) => {
    const {addToCart, product} = props;
    return (
        <div className="product">
            <h5>{product.name}</h5>
            <button onClick={() => addToCart(product.id)}>add to cart</button>
        </div>
    );
};

export default Product;