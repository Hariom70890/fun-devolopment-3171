import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const initialState = {
   name: "",
   desc: "",
   price: "",
   color: "",
   gender: "",
   category: "",
   image: "",
};

function Admin() {
   const [product, setProduct] = useState(initialState);
   const { name, image, desc, price, category, gender, color } = product;
   const navigate = useNavigate();
   const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct((prev) => {
         return { ...prev, [name]: name === "price" ? +value : value };
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      axios
         .post(`https://json-example.onrender.com/products`, product)
         // .post(`http://localhost:8080/product`)
         .then((res) => console.log(res.data));
      console.log(product);
      alert("Item has been added");
      navigate("/app");
   };
   return (
      <DIV>
         <form onSubmit={handleSubmit}>
            <h1 style={{ fontFamily: "Brush Script MT" }}>Add Product</h1>

            <input
               required
               type="text"
               // value={name}
               name="title"
               placeholder="Product Name"
               onChange={(e) => handleChange(e)}
            />

            <input
               required
               value={image}
               type="text"
               onChange={(e) => handleChange(e)}
               name="image"
               placeholder="Product Image"
            />

            <input
               required
               onChange={(e) => handleChange(e)}
               type="text"
               value={desc}
               name="desc"
               placeholder="Product description"
            />

            <input
               required
               onChange={(e) => handleChange(e)}
               type="number"
               name="price"
               value={price}
               placeholder="Product Price"
            />

            <select
               required
               value={category}
               onChange={(e) => handleChange(e)}
               name="category"
               className="select-tags"
            >
               <option value="">Select Category</option>
               <option value="shirt">Shirt</option>
               <option value="jeans">Jeans</option>
               <option value="sarees">Sarees</option>
               <option value="kurtas">Kurtas</option>
               <option value="shoes">Shoes</option>
               <option value="sandals">Sandals</option>
            </select>

            <select
               required
               value={color}
               onChange={(e) => handleChange(e)}
               name="color"
               className="select-tags"
            >
               <option value="">Select Color</option>

               <option value="blue">Blue</option>
               <option value="white">White</option>
               <option value="black">Black</option>
               <option value="gray">Gray</option>
               <option value="maroon">Maroon</option>
               <option value="pink">Pink</option>
               <option value="olive">Olive</option>
               <option value="multi">Multi</option>
            </select>

            <select
               value={gender}
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
            <button type="submit">Add Product</button>
         </form>
      </DIV>
   );
}

export default Admin;

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
      color: black;
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
      color: black;
   }

   button {
      border: none;
      width: 40%;
      height: 48px;
      font-size: large;
      color: white;
      background-color: green;
      border-radius: 25px;
   }
`;
