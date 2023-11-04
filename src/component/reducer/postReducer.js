import { ALL_PRODUCT_FAIL, ALL_PRODUCT_SUCCESS } from "../constant/ProductConstant";
import { ALL_POST_REQUEST, CLEAR_ERRORS } from "../constant/postConstant";


export const postReducer = (state = { posts: [] }, action) => {

    switch (action.type) {

        case ALL_POST_REQUEST:
            return {
                loading: true,
                posts: [],
            }
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                posts: action.payload.posts,
                postCount: action.payload.postCount,
                filteredPostCount: action.payload.filteredPostCount,
                resultPerPage: action.payload.resultPerPage,
            }
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;

    }

}


export const postDetails = (state = { post: {} }, action) => {

    switch (action.payload) {
        
        

    }

}