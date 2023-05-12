import styled from '@emotion/styled';
import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteProduct, getProduct } from '../Api/action';
import { Link } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';
import { toast } from 'react-toastify';
// import styled from "styled-components";
export const AdminCard = ({id,category,color,description,gender,image,price,title,setX}) => {
// const dispatch = useDispatch()
const dispatch = useDispatch()


// delete
  const handleDelete = ()=>{
    dispatch(deleteProduct(id)).then((res)=>{
      dispatch(getProduct({}))
      toast.success("Item Deleted")
      setX((pre)=>!pre)
    })
  }


  return (
    <DIV className='card-container'>
    
<div >

     <img width={500} src={image} alt={title}/>
</div>
<div style={{textAlign:"center"}} >

     <h5 style={{minHeight:"50px"}} >
     <Text textAlign="center" color="blackAlpha.50">Name </Text> {title }</h5>
     <p>Price : ₹ {price}</p>
    <p>{description}</p>

     <button className='editBtn' >
         <Link to={`/edit/${id}`}>Edit</Link>
         </button>
    <button className='deleteBtn' onClick={()=>handleDelete(id)} >Delete</button> 
</div>
    
    
    </DIV>
  )
}

const DIV = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding:10px;
border-radius:30px;

img{
    width: 50%;
    margin:auto 100px;
padding:auto 100px;
border-radius:30px;

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