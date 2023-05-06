import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType"

export const LoginSuccess=(payload)=>{
 
  return {type:LOGIN_SUCCESS,payload}
}
export const LoginFailure=(payload)=>{
  return {type:LOGIN_FAILURE,payload}
}