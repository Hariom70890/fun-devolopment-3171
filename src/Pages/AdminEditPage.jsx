import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";

export const AdminEditPage = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const [x, setX] = useState(false);
   const [data, setData] = useState([]);
   useEffect(() => {
      axios
         .get(`https://json-example.onrender.com/products/${id}`)
         .then((res) => setData(res.data));
   }, [x]);

   const handleUpdate = () => {
      axios
         .patch(`https://json-example.onrender.com/products/${id}`, {
            ...data,
         })
         .then((res) => setData(res.data));
      setX(!x);
      navigate("/admindashboard");
   };
   const handleChange = (e) => {
      const { name, value } = e.target;
      if (name == "price") {
         data.price = +value;
      } else if (name == "title") {
         data.title = value;
      } else if (name == "image") {
         data.image = value;
      }
   };
   // console.log(data);

   return (
      <div style={{ background: "#90CAF9", width: "80%", margin: "auto" }}>
         <DIV>
            <h1 style={{ margin: 60 }}>
               You are editing product with ID: {id}{" "}
            </h1>

            <input
               type="text"
               placeholder="Enter Price"
               name="price"
               onChange={handleChange}
            />
            <input
               type="text"
               name="title"
               placeholder="Enter Name of Product"
               onChange={handleChange}
            />
            <input
               style={{ padding: "50px 20px" }}
               type="text"
               name="image"
               placeholder="Update the URL of the Image"
               onChange={handleChange}
            />
            <button onClick={() => handleUpdate()}>Update the data</button>
         </DIV>
      </div>
   );
};

const DIV = styled.div`
   width: 50%;
   background: #bdbdbd;
   padding: 20px 40px;
   margin: auto;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   ${"" /* top-margin:200px; */}
   display: flex;
   flex-direction: column;
   gap: 25px;
   border: 1px solid gray;
   align-items: center;
   input {
      width: 80%;
      height: 30px;
      padding: 10px;
      font-size: larger;
      border: 1px solid black;
   }
   button {
      width: 150px;
      height: 30px;
      font-size: large;
      background: green;
      color: white;
      border-radius: 12px;
   }
`;
