import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Product } from '../Pages/Product'
import Admin from '../Pages/Admin'
import AdminDashboard from '../Pages/AdminDashboard'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/"  element={<Product/>} />
        <Route path='admin' element={<Admin/>}/>
        <Route path='dashboard' element={<AdminDashboard/>}/>

    </Routes>
  )
}
