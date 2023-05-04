import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../Api/action';
import { grid } from '@chakra-ui/styled-system';
import styled from 'styled-components';
import {AdminCard} from '../Components/AdminCard'
const AdminDashboard = () => {
    
    const {product,isError,isLoading} = useSelector((store)=>{
        return {
            product : store.productReducer.products,
            isLoading : store.productReducer.isLoading,
            isError : store.productReducer.isError,
        }
    })
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProduct)
    },[])
    console.log(product)
  return (
    <DIV>
    <div className='product-card'>

     {product.map((ele)=>{
    return <AdminCard key={ele.id} {...ele} x= "true" />
    })
    }
    </div>

    </DIV>
  )
}

export default AdminDashboard


const DIV = styled.div`
/* border: 5px solid ; */
width: 100%;
.product-card{
    display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 2rem;
}
`