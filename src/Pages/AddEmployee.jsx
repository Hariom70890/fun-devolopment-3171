import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Center } from "@chakra-ui/layout";
import { title } from "process";

const initialState = {
   fullName: "",
   address: "",
   age: "",
   gender: "",
   role: "",
   salary: "",
   image: "",
};

function AddEmployee() {
   const [employee, setEmployee] = useState(initialState);
   const { fullName, image, address, age, salary, gender, role } = employee;
   const navigate = useNavigate();
   const handleChange = (e) => {
      const { name, value } = e.target;
      setEmployee((prev) => {
         return {
            ...prev,
            [name]: name === "age" || "salary" ? +value : value,
         };
      });
      console.log(employee);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      axios
         .post(`https://json-example.onrender.com/employees`, employee)
         .then((res) => console.log(res.data));
      console.log(employee);
      toast("New Employee has been added");
      navigate("/admindashboard");
   };
   return (
      <DIV>
         <form onSubmit={handleSubmit}>
            <h1 style={{ fontFamily: "Brush Script MT", textAlign: "center" }}>
               Add a New Employee to Your Company
            </h1>

            <input
               required
               type="text"
               value={fullName}
               name="name"
               placeholder="Employee Name"
               onChange={(e) => handleChange(e)}
            />

            <input
               required
               value={image}
               type="text"
               onChange={(e) => handleChange(e)}
               name="image"
               placeholder="Employee Image"
            />

            <input
               required
               onChange={(e) => handleChange(e)}
               type="text"
               value={address}
               name="Employee Address"
               placeholder="Employee address"
            />

            <input
               required
               onChange={(e) => handleChange(e)}
               type="number"
               name="age"
               value={age}
               placeholder="Employee age"
            />
            <input
               required
               value={salary}
               onChange={(e) => handleChange(e)}
               name="salary"
               type="number"
               placeholder="Employee Salary (LPA)"
            />
            <select
               required
               value={role}
               onChange={(e) => handleChange(e)}
               name="role"
               className="select-tags"
            >
               <option value="">Select Employee role</option>

               <option value="Full-stack Developer">
                  Full-stack Developer
               </option>
               <option value="Front-End Developer">Front-End Developer</option>
               <option value="Back-End Developer">Back-End Developer</option>
            </select>

            <select
               required
               onChange={(e) => handleChange(e)}
               name="gender"
               className="select-tags"
            >
               <option value="">Select Gender</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
               {/* <option value="unisex">Unisex</option> */}
            </select>
            <button type="submit">Add Employee</button>
         </form>
      </DIV>
   );
}

export default AddEmployee;

const DIV = styled.div`
   width: 70%;
   margin: auto;
   padding: 50px 10px;
   background: #42a5f5;
   border-radius: 5px;
   fontFamily:"Brush Script MT"

   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;


   form {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius:1%;
      margin: 50px auto;
      padding: 50px 0px;
      align-items: center;
      justify-content: center;
      role: black;
      background:white
   }
   input,
   select {
      height: 40px;
      font-size: larger;
      width: 90%;
      border-radius: 5px;
      border: 1px solid black;
      padding: 10px;
      role: black;
   }

   button {
      border: none;
      width: 40%;
      height: 48px;
      font-size: large;
      role: white;
      background-role: green;
      border-radius: 25px;
   }
`;
