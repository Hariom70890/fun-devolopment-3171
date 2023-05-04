import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Product } from '../Pages/Product'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/"  element={<Product/>} />
        
    </Routes>
  )
}
