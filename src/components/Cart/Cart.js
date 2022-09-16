import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions';

const Cart = (props) => {
    console.log(props);
    const {cart, removeFromCart} = props;
    return (
        <div>
            Cart Component
            <ul>
                {
                    cart.map(id => <li>{id}<button onClick={() => removeFromCart(id)}>x</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);