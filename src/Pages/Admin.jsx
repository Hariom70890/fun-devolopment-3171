import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
   const { name, image, desc, price, category, gender } = product;

   const handleChange = (e) => {
      const { name, value } = e.target;
      setProduct((prev) => {
         return { ...prev, [name]: name === "price" ? +value : value };
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      
        axios
        //  .post(`https://json-example.onrender.com/products`, product)
        .post(`http://localhost:8080/product`)
        .then((res) => console.log(res.data));
     console.log(product);
     alert("Item has been added");
      
     
   };
   return (
      <DIV>
         <form onSubmit={handleSubmit}>
            <h1>Add Product</h1>

            <input
               required
               type="text"
               value={name}
               name="name"
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
               placeholder="Product desc"
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
               <option value="top-wear">Top Wear</option>
               <option value="bottom-wear">Bottom Wear</option>
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
               <option value="kids">Kids</option>
            </select>
            <button type="submit">Add Product</button>
         </form>
      </DIV>
   );
}

export default Admin;

const DIV = styled.div`
   width: 400px;
   margin: auto;
   padding: 10px;
   border: 1px solid black;
   form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      justify-content: center;
   }
   input {
      height: 40px;
      font-size: larger;
      width: 90%;
      border-radius: 5px;
   }
   select {
      height: 40px;
      font-size: large;
      width: 90%;
      border-radius: 5px;
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
