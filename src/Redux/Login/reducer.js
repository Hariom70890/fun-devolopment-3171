import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType";


const intitalState={
    isAuth:false,
}

export const AuthReducer=(state=intitalState,{type,payload})=>{
    
    switch(type){
        case LOGIN_SUCCESS:{
            return {
               
                isAuth:payload,
            }
        }
        case LOGIN_FAILURE:{
            return {
                
                isAuth:payload,
            }
        }
        default:{
            return intitalState;
        }
    }
}