import axios from "axios";
import {

    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERROR,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS
} from "../constant/ProductConstant"


export const getAllProduct = (price = [0, 200], currentPage = 1, category) => async (dispatch) => {

    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST
        })
        let link = `http://localhost:5000/api/v1/products?price[gte]=${price[0]}&price[lte]=${price[1]}&page=${currentPage}`;
        if (category) {
            link = `http://localhost:5000/api/v1/products?price[gte]=${price[0]}&price[lte]=${price[1]}&page=${currentPage}&category=${category}`;
        }

        const { data } = await axios.get(link);
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error?.error?.response.data.message,
        })
    }
}

// product details 

export const productDetails = (productId) => async (dispatch) => {


    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/api/v1/product/${productId}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error?.error.response.data.message
        })
    }


}



// clear error 
export const clearErrors = () => (dispatch) => {
    dispatch({
        type: CLEAR_ERROR
    })
}