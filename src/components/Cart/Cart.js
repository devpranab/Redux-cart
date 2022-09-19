import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h5>Cart</h5>
            <hr />
            <ul>
                {
                    cart.map(pd => <li key={pd.cartId} style={{margin: "10px"}}>{pd.name} <button onClick={() => removeFromCart(pd.cartId)}>x</button></li>)
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