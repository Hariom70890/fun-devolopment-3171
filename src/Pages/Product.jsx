import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Api/action'
import { ProductCard } from '../Components/ProductCard'
// import styled from 'styled-components'
import styled from '@emotion/styled';
import { Spinner, Text } from '@chakra-ui/react'
import { Stack} from '@chakra-ui/react'

export const Product = () => {
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
//    console.log(product)
  return (
    <DIV className='product-container'>
    <div className='loding-product'>{isLoading ? (<Text size="xl">Loding.....<Spinner className='spinner'
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/></Text>  ) :(
   <div className='product-card'>
    {product.map((ele)=>{
    return <ProductCard key={ele.id} {...ele} x = "false" />
    })
    }
    </div>
)}
</div>
    </DIV>
  )
}
const DIV = styled.div`
/* border: 5px solid ; */
width: 100%;
.product-card{
    display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 2rem;
}
.spinner{
  /* margin: auto; */
  /* border: 2px solid ; */
  /* margin-left: 50%; */
  margin-left: 30vh;
 margin-top: 40vh;

 /* margin-top: 15%; */
}
`;
