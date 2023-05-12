import { Route, Routes } from "react-router-dom";

import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Men } from "../Pages/Men";
import { Women } from "../Pages/Women";
import { Product } from "../Pages/Product";
import Admin from "../Pages/Admin";
import AdminDashboard from "../Pages/AdminDashboard";
import Login from "../login/Login";
import SignupCard from "../login/SignUp";
import CartPage from "./CartPage";

// import CartPage from "./CartPage"
import SingleProductPage from "../Pages/SingleProductPage";
import Payment from "../Pages/Payment";
import { AdminCard } from "./AdminCard";
import { AdminEditPage } from "../Pages/AdminEditPage";
import AddEmployee from "../Pages/AddEmployee";
import PrivateRouting from "./PrivateRouting";

export const MainRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/men" element={<Men />} />
         <Route path="/women" element={<Women />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignupCard />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/payment" element={<Payment />} />
         <Route path="/admindashboard/addProduct" element={<Admin />} />
         <Route path="/admindashboard/addemployee" element={<AddEmployee />} />
         <Route path="/cart" element={<CartPage />} />

         <Route path="/shop" element={
         <PrivateRouting>

         <Product /> 
         </PrivateRouting>
         }
         />

         <Route
            path="/product/:id"
            element={
               <PrivateRouting>
               <SingleProductPage />
                </PrivateRouting>
            }
         />

         <Route path="edit/:id" element={<AdminEditPage />} />

         <Route path="/admindashboard" element={
         <PrivateRouting>

         <AdminDashboard />
         </PrivateRouting>
         } />
      </Routes>
   );
};
