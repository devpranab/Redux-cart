import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions';
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

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

//const connectToStore = connect(mapStateToProps, mapDispatchToProps);
//connectToStore(Shop);
//connect(mapStateToProps, mapDispatchToProps) (Shop);
//shortcut bellow

export default connect(mapStateToProps, mapDispatchToProps) (Shop);