import styled from '@emotion/styled';
import React from 'react'
import { Button } from '@chakra-ui/react';
import "../Css/Productcard.css"

import { useDispatch } from 'react-redux';
import { ADD } from '../Redux/cartReducer/action';
import { postRequestForCart } from '../Api/action';


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
  const handleSinglePage = ()=>{
    // console.log(id)
  }

  const handleCartPage =()=>{
    postRequestForCart(dataObj)
  }

  return (
    <DIV className="container">
     <img src={image} alt={title}/>
     {/* <div className='flex'> */}
     <h3 style={{fontSize:"15px", fontWeight: 600 }}>{title }</h3>
    {/* </div> */}
     <h3 style={{fontSize:"15px", fontWeight: 600,color:"#FF8A65"}}>₹{price }</h3>
     <div class="buttons">
     

     <Button size="md" fontSize="s"  colorScheme='gray' onClick={handleCartPage}>Add</Button>

     <Button size="md" fontSize="s"  colorScheme='gray' onClick={handleSinglePage}>details</Button>
     </div>
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