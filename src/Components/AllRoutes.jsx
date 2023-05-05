import {Routes,Route} from "react-router-dom"
import { Home } from "../Pages/Home"
import {About} from "../Pages/About"
import {Contact} from "../Pages/Contact"
import {Men} from "../Pages/Men"
import {Women} from "../Pages/Women"

export const AllRoutes = () =>{

    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/men" element={<Men/>} />
            <Route path="/women" element={<Women/>} />
            <Route path="/contact" element={<Contact/>} />


        </Routes>
    )
}