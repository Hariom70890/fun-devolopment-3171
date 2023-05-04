import { DELETE_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_GET_REQUEST_FAILURE, PRODUCT_GET_REQUEST_LOADING, PRODUCT_GET_REQUEST_SUCESSFULL } from "../ActionTypes/actionTypes";

const initialState = {
    isLoading :false,
    isError : false,
    products:[]
}

export const reducer = (state=initialState,{type,payload})=>{
   switch (type) {
    case PRODUCT_GET_REQUEST_LOADING:{
        return {...state,isLoading:true}
    }
    case PRODUCT_GET_REQUEST_SUCESSFULL:{
        return {...state,isLoading:false,products:payload}
    }
    case PRODUCT_GET_REQUEST_FAILURE:{
        return {...state,isLoading:false,isError:true}
    }
    case DELETE_PRODUCT_SUCCESS :
        return {...state, isLoading:false, products:payload}
        
     case PATCH_PRODUCT_SUCCESS :
        return {...state, isLoading:false}
   
    default:
        return state;
   }
}