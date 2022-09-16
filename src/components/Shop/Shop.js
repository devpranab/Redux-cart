import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {name: "Apple", id: 1},
        {name: "Dell", id: 2},
        {name: "Mi", id: 3},
        {name: "Asus", id: 4},
        {name: "HP", id: 5}
    ]
    return (
        <div>
        {
         products.map(product => <Product product={product}></Product>)
        }
        </div>
    );
};

export default Shop;