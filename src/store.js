import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './component/reducer/userReducer';
import { productDetailsReducer, productReducer } from './component/reducer/productReducer';
import { cartReducer } from './component/reducer/cartReducer';
import { postReducer } from './component/reducer/postReducer';

const reducer = combineReducers({
    user: userReducer,
    // all product reducer 
    products: productReducer,
    // get product details 
    productDetails: productDetailsReducer,
    // add item in cart
    cart: cartReducer,
    // post 
    posts: postReducer,
});


let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ?
            JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    }
};


const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;


