import { ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType";


const intitalState={
    isAuth:false,
    adminAuth:false,
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
        case ADMIN_LOGIN_SUCCESS:{
            return {
                
                adminAuth:payload,
            }
        }
        case ADMIN_LOGIN_FAILURE:{
            return {
                
                adminAuth:payload,
            }
        }
        default:{
            return intitalState;
        }
    }
}