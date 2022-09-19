import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions';
import Product from '../Product/Product';

const Shop = (props) => {
    const {products, addToCart} = props;
    return (
        <div>
            <h5>Shop-Product Component</h5>
            <hr />
        {
         products.map(product => 
         <Product key={product.id} product={product} addToCart={addToCart}>
         </Product>)
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

export default connect(mapStateToProps, mapDispatchToProps) (Shop);