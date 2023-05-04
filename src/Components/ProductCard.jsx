import styled from '@emotion/styled';
import chroma from 'chroma-js';
import React from 'react'
import { Sidebar } from './Sidebar';
import { Button } from '@chakra-ui/react';

// import styled from "styled-components";
// import WebFont from 'google-fonts-loader'; //fontFamily: 'Poppins', 

export const ProductCard = ({id,category,color,description,gender,image,price,title}) => {
  // const colorName = chroma(color).name();
  // console.log("colorname",colorName)

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

  return (
    <DIV className='card-container'>
     <img src={image} alt={title}/>
<div className='flex'>
     <h3 style={{fontSize:"15px", fontWeight: 600 }}>{title }</h3>
     <div className='flex-circle'
      style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor:color}}
    ></div>
     <div className='flex-circle'
      style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: defaultColor }}
    ></div>
     <div className='flex-circle'
      style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: defaultColor2 }}
    ></div>
    </div>
     <h3 style={{fontSize:"15px", fontWeight: 600,color:"#FF8A65"}}>₹{price }</h3>
    
     <Button colorScheme='gray'>Add to cart</Button>
     <Button colorScheme='blue'>Show details</Button>

     
    </DIV>
  )
}

const DIV = styled.div`

/* position: relative;
left: 50%; */
border-radius: 20px;
/* width: 100%; */

img{
  /* border: 2px solid red; */
  border-radius: 20px;
    width: 100%;
}
.btn-cart-details{
  background-color: red;
}
.flex{
  /* position: relative; */
  display: flex;
  left: 50px;
  
}
.flex-circle{
}
`;