import styled from '@emotion/styled';
import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteProduct, getProduct } from '../Api/action';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
// import styled from "styled-components";
export const AdminCard = ({id,category,color,description,gender,image,price,title}) => {
// const dispatch = useDispatch()
const dispatch = useDispatch()


// delete
  const handleDelete = ()=>{
    dispatch(deleteProduct(id)).then((res)=>{
      dispatch(getProduct({}))
    })
  }


  return (
    <DIV className='card-container'>
     <img width={100} src={image} alt={title}/>
     <h5 style={{minHeight:"50px"}} >
     <Text textAlign="center" color="blackAlpha.50">Name </Text> {title }</h5>
     <p>Price : ₹ {price}</p>
    

     <button className='editBtn' >
         <Link to={`/edit/${id}`}>Edit</Link>
         </button>
    <button className='deleteBtn' onClick={()=>handleDelete(id)} >Delete</button> 
    
    </DIV>
  )
}

const DIV = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding:10px;

span{
     ${'' /* border: 2px solid red; 
     position:sticky */}

}

img{
    width: 100%;
}
.deleteBtn{
  background:red;
  color:white;
  padding:10px 20px;
  ${'' /* padding:0.25rem; */}
  border-radius:25px;
  margin:5px
}

.editBtn{
    background:blue;
  color:white;
  padding:10px 20px;
  border-radius:25px;
}
`;