import React, { useEffect, useState } from "react";
// import "./Admin.css";
import styles from './admin.module.css'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AdminCard } from "../Components/AdminCard";
import { Text, position } from "@chakra-ui/react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { getProduct } from "../Api/action";
function App() {
   // const [product, setProduct] = useState([]);
   const [employee, setEmployee] = useState([]);
   const [users, setUsers] = useState([]);
   const [orders, setOrders] = useState([]);
   const [totalIncome, setTotalIncome] = useState(0);
   const location = useLocation();
   const dispatch = useDispatch();
   const [searchParams, setSearchParams] = useSearchParams();
   const { product } = useSelector((store) => {
      return {
         product: store.productReducer.products,
      };
   });
   const paramObj = {
      params: {
         category: searchParams.getAll("category"),
         gender: searchParams.getAll("gender"),
         color: searchParams.getAll("color"),
         // _sort:searchParams.get("order") && "price",
         // _order:searchParams.get("order")
      },
   };

   useEffect(() => {
      dispatch(getProduct(paramObj));
   }, [location.search]);

   const navigate = useNavigate();
   const handleAdd = () => {
      alert("Heloo");

      navigate("/admin");
   };

   function showOptions() {
      alert("Hello");
   }

   // setX(Math.random());

   return (
      <>
         <br />
         <br />
         <br />
         <br />

         <nav>
            <h1>Hey! Admin Welcome</h1>
         </nav>
         <br />
         <Text fontSize="30px" color="black">
            Total Product :{product.length}
         </Text>
         <div className={styles.main_container}>
            <div className={styles.Boxes}>
               <div
                  className={styles.smallBoxes}
                  style={{ backgroundColor: "rgb(244, 135, 222)" }}
               >
                  <h2 id="ordreTotal">33</h2>
                  <p>Total Orders</p>
               </div>
               <div
                  className={styles.smallBoxes}
                  style={{ backgroundColor: "rgb(93, 162, 241)" }}
               >
                  <h2 id="userTotal">8</h2>
                  <p>Total Registered Users</p>
               </div>
               <div
                  className={styles.smallBoxes}
                  style={{ backgroundColor: "rgb(226, 159, 71)" }}
               >
                  <h2 id="incomeemployees">102</h2>
                  <p>Total Employees</p>
               </div>
               <div
                  className={styles.smallBoxes}
                  style={{ backgroundColor: "rgb(136, 234, 94)" }}
               >
                  <h2 id={styles.incomeTotal}>122344</h2>
                  <p>Total Income</p>
               </div>
            </div>
            <h2 className={styles.notification}></h2>
            <div className={styles.middleContainer}>
               <div className={styles.buttonContainer}>
                 
                     <button className={styles.btnsnm} onClick={handleAdd}>Add Products</button>
                 

                     <div className={`${styles.updateProduct} ${styles.AddEmployee}`}>
                     <h1 id="update_details">Add Employee</h1>
                     {/* <!-- <input type="text" id="addEmployeeid" placeholder="Employee Id"> --> */}
                     <input
                        type="text"
                        placeholder="Employee Name"
                        id="addEmployeeName"
                     />
                     <input
                        type="text"
                        placeholder="Employee ImageUrl"
                        value="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg"
                        id="addEmployeeImage"
                     />
                     <input
                        type="number"
                        placeholder="Employee Salary"
                        id="addEmployeeSalary"
                     />
                     <input
                        type="text"
                        placeholder="Employee Department"
                        id="addEmployeeDepartment"
                     />
                     <button className={styles.btnsnm}  >Add Employee</button>
                     <div>
                        <hr />
                     </div>
                  </div>
                  <div className={`${styles.updateProduct} ${styles.updateEmployeeSalary}`}>
                     <h1 id={styles.updateDetails}>Update Salary</h1>
                     <input
                        type="text"
                        id="updateEmployeeSalary_Id"
                        placeholder="Employee Id"
                     />
                     <input
                        type="number"
                        id="updateEmployeeSalary_salary"
                        placeholder="Employee Salary"
                     />
                     <button className={styles.btnsnm} >Update Salary</button>
                     <div>
                        <hr />
                     </div>
                  </div>
               </div>
               <div className={styles.cardContainer}>
                  {product.reverse().map((e) => {
                     return <AdminCard key={e.id} {...e} />;
                  })}
               </div>
            </div>
         </div>
      </>
   );
}
export default App;
