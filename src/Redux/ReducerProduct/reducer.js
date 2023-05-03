import { PRODUCT_GET_REQUEST_FAILURE, PRODUCT_GET_REQUEST_LOADING, PRODUCT_GET_REQUEST_SUCESSFULL } from "../ActionTypes/actionTypes";

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
        
   
    default:
        return state;
   }
}