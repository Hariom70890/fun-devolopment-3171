import styled from '@emotion/styled';
import React from 'react'
// import styled from "styled-components";
export const ProductCard = ({id,category,color,description,gender,image,price,title}) => {

  return (
    <DIV className='card-container'>
     <img src={image} alt={title}/>
     <h2>{title }</h2>
    </DIV>
  )
}

const DIV = styled.div`

/* border: 2px solid red; */
.card-container{
    width: 100%;
}
img{
    /* border: 2px solid red; */
    width: 100%;
}

`;