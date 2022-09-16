import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h5>Cart Component</h5>
            <hr />
            <ul>
                {
                    cart.map(id => <li style={{margin: "10px"}}>{id} <button onClick={() => removeFromCart(id)}>x</button></li>)
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