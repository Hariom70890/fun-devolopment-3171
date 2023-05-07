import { ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType"

export const LoginSuccess=(payload)=>{
 
  return {type:LOGIN_SUCCESS,payload}
}
export const LoginFailure=(payload)=>{
  return {type:LOGIN_FAILURE,payload}
}
export const AdminSuccess=(payload)=>{
  return {type:ADMIN_LOGIN_SUCCESS,payload}
}
export const AdminFailure=(payload)=>{
  return {type:ADMIN_LOGIN_FAILURE,payload}
}