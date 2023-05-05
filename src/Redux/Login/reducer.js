import { LoginFailure, LoginSuccess } from "./actionType";

const intitalState={
    isAuth:false,
}

export const AuthReducer=(state=intitalState,{type,payload})=>{
    
    switch(type){
        case LoginSuccess:{
            return {
               
                isAuth:payload,
            }
        }
        case LoginFailure:{
            return {
                
                isAuth:payload,
            }
        }
        default:{
            return intitalState;
        }
    }
}