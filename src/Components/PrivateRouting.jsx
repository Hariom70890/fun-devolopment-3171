import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRouting = ({children}) => {
const auth=useSelector((store)=>store.AuthReducer.isAuth)

const location = useLocation()

if(!auth){
    return <Navigate  to="/login" state={location.pathname} replace/>
}

  return (
    <div>{children}</div>
  )
}

export default PrivateRouting