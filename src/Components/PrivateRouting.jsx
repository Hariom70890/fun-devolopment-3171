import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRouting = ({children}) => {
const auth=useSelector((store)=>store.AuthReducer.isAuth)

if(!auth){
    return <Navigate to="/login" />
}

  return (
    <div>{children}</div>
  )
}

export default PrivateRouting