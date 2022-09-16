import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialState = {
    cart:[],
    products:[
        {name: "Apple", id: 1},
        {name: "Dell", id: 2},
        {name: "Mi", id: 3},
        {name: "Asus", id: 4},
        {name: "HP", id: 5}
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_CART:
                const newId = action.id;
                const newCart = [...state.cart, newId];
                return {products: state.products, cart: newCart};
        case REMOVE_FROM_CART:        
                const id = action.id;
                const remainingCart = state.cart.filter(item => item !== id);
                return {cart: remainingCart};
        default:
            return state;
    }
}

export default  cartReducers;