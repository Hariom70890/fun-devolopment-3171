import styled from '@emotion/styled';
import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteProduct, getProduct } from '../Api/action';
import { Link } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';
import { toast } from 'react-toastify';
// import styled from "styled-components";
export const AdminCard = ({id,category,color,description,gender,image,price,title}) => {
// const dispatch = useDispatch()
const dispatch = useDispatch()


// delete
  const handleDelete = ()=>{
    dispatch(deleteProduct(id)).then((res)=>{
      dispatch(getProduct({}))
      toast.success("Item Deleted")
    })
  }


  return (
    <DIV className='card-container'>
    <Flex>
<div style={{width:"50%"}}>

     <img width="50px" src={image} alt={title}/>
</div>
<div >

     <h5 style={{minHeight:"50px"}} >
     <Text textAlign="center" color="blackAlpha.50">Name </Text> {title }</h5>
     <p>Price : ₹ {price}</p>
    <p>{description}</p>

     <button className='editBtn' >
         <Link to={`/edit/${id}`}>Edit</Link>
         </button>
    <button className='deleteBtn' onClick={()=>handleDelete(id)} >Delete</button> 
</div>
    </Flex>
    
    </DIV>
  )
}

const DIV = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding:10px;
${'' /* text-align:"right"; */}

img{
    width: 40%;
    margin:auto 100px;
padding:auto 100px;
}
.deleteBtn{
  background:red;
  color:white;
  padding:10px 20px;
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