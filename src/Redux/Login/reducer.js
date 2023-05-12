import { ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType";


const intitalState={
    isAuth:false,
    adminAuth:false,
}

export const AuthReducer=(state=intitalState,{type})=>{
    
    switch(type){
        case LOGIN_SUCCESS:{
            return {
               ...state,
                isAuth:true,
            }
        }
        case LOGIN_FAILURE:{
            return {
               ...state,
               adminAuth:false,
                isAuth:false,
            }
        }
        case ADMIN_LOGIN_SUCCESS:{
            return {
               ...state,
                
                adminAuth:true,
            }
        }
      
        default:{
            return state;
        }
    }
}