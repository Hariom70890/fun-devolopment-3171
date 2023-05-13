import { Route, Routes } from "react-router-dom";

import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
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
import Paymentdone from "./PaymentDone";

export const MainRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/men" element={<Men />} />
         <Route path="/women" element={<Women />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignupCard />} />
         <Route
            path="/payment"
            element={
               <PrivateRouting>
                  <Payment />
               </PrivateRouting>
            }
         />
         <Route path="/admindashboard/addProduct" element={<Admin />} />
         <Route path="/admindashboard/addemployee" element={<AddEmployee />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/paymentdone" element={<Paymentdone />} />
         <Route path="/shop" element={<Product />} />

         <Route
            path="/product/:id"
            element={
           
                  <SingleProductPage />
              
            }
         />

         <Route path="edit/:id" element={<AdminEditPage />} />

         <Route
            path="/admindashboard"
            element={
               <PrivateRouting>
                  <AdminDashboard />
               </PrivateRouting>
            }
         />
      </Routes>
   );
};
