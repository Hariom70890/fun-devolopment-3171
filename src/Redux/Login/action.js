import {  ADMIN_LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType"

export const LoginSuccess=()=>{
 
  return {type:LOGIN_SUCCESS}
}
export const LoginFailure=()=>{
  return {type:LOGIN_FAILURE}
}
export const AdminSuccess=()=>{
  return {type:ADMIN_LOGIN_SUCCESS}
}
