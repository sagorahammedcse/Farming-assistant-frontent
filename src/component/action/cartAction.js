import axios from "axios"
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO
} from "../constant/cartConstant"


export const addItemToCart = (productId, quantity) => async (dispatch, getState) => {

    const { data } = await axios.get(`http://localhost:5000/api/v1/product/${productId}`)

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            images: data.product.images[0].url,
            quantity,
        },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItemsFromCart = (productId) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_CART_ITEM,
        payload: productId
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

};
//   save shipping info 
export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data,
    });
    localStorage.setItem("shippingInfo", JSON.stringify(data));
};