import axios from "axios"
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "../constant/orderConstant"


export const createOrder = (order) => async (dispatch) => {

    try {
        dispatch({ type: CREATE_ORDER_REQUEST })

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        }
        const { data } = await axios.post(`http://localhost:5000/api/v1/order/new`, order, config)
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAIL, payload: error.response.data.message })
    }

}