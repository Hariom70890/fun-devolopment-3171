import styled from '@emotion/styled';
import React from 'react'
import { Button } from '@chakra-ui/react';
import "../Css/Productcard.css"

import { checkingDataInCart, postRequestForCart } from '../Api/action';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useDispatch } from 'react-redux';





export const ProductCard = ({id,category,color,description,gender,image,price,title}) => {
  const dataObj = {
    id,category,color,description,gender,image,price,title
  }
  const randomColor = () => {
    const color1 = Math.floor(Math.random()*256);
    const color2 = Math.floor(Math.random()*108);
    const color3 = Math.floor(Math.random()*256);
    return `rgb(${color1}, ${color2}, ${color3})`
  };
  
  const defaultColor = randomColor();
  const randomColor2 = () => {
    const color1 = Math.floor(Math.random()*256);
    const color2 = Math.floor(Math.random()*108);
    const color3 = Math.floor(Math.random()*300);
    return `rgb(${color1}, ${color2}, ${color3})`
  };
  
  const defaultColor2 = randomColor2();

  const handleCartPage = () => {
    checkingDataInCart().then((res) => {
        // console.log(res.data)
        const checkingBipinCart = res.data.find((ele)=>ele.id==dataObj.id);
        if (checkingBipinCart) {
          // console.log(checkingBipinCart,"abcn")
          toast.warning("Product already in Cart!")
          
        } else {
          postRequestForCart(dataObj);
          toast.success("Product Added to the Cart!")
        }
      })
  };
  return (
    <DIV className="container">
     <img src={image} alt={title}/>
     {/* <div className='flex'> */}
     <h3 style={{fontSize:"15px", fontWeight: 600 }}>{title }</h3>
    {/* </div> */}
     <h3 style={{fontSize:"15px", fontWeight: 600,color:"#FF8A65"}}>₹{price }</h3>
     <div class="buttons">
     

     <Button size="md" fontSize="s"  colorScheme='gray' onClick={handleCartPage}>Add</Button>

<Link to={`/product/${id}`}>
     {/* <Button size="md" fontSize="s"  colorScheme='gray' onClick={handleSinglePage}>details</Button> */}
     </Link>

     </div>
     <ToastContainer
position="top-center"
  autoClose={1000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  style={{ borderRadius: 0, boxShadow: 'none' }}
/>
    </DIV>
  )
}

const DIV = styled.div`

/* position: relative;
left: 50%; */
/* border-radius: 20px; */
/* width: 100%; */

img{
  border-radius: 20px;
    width: 100%;
}
.flex{
  display: flex;
  left: 50px;
  
}
`;