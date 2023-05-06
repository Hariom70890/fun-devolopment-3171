import { Route, Routes } from "react-router-dom"

import { Home } from "../Pages/Home"
import {About} from "../Pages/About"
import {Contact} from "../Pages/Contact"
import {Men} from "../Pages/Men"
import {Women} from "../Pages/Women"
import { Product } from '../Pages/Product'
import Admin from '../Pages/Admin'
import AdminDashboard from '../Pages/AdminDashboard'
import Login from "../login/Login"
import SignupCard from "../login/SignUp"
import PrivateRouting from "./PrivateRouting"
import SingleProductPage from "../Pages/SingleProductPage"



export const MainRoutes = () =>{



    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/men" element={<Men/>} />
            <Route path="/women" element={<Women/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignupCard/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/shop" element={
                <PrivateRouting>
            <Product/>
            </PrivateRouting>
            }/>
            <Route path="/single/:id" element={<SingleProductPage/>} />
            <Route path='admin' element={<Admin/>}/>
            <Route path='dashboard' element={<AdminDashboard/>}/>
        </Routes>

  )
}
