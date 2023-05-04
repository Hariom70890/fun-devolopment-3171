import React, { useEffect, useState } from 'react'
import "../Css/product.css"
import { useDispatch, useSelector, } from 'react-redux'
import { getProduct } from '../Api/action'
import { ProductCard } from '../Components/ProductCard'
import styled from '@emotion/styled';
import { Spinner, Text } from '@chakra-ui/react'
import { Stack} from '@chakra-ui/react'
import { Sidebar } from '../Components/Sidebar';
import { useSearchParams ,useLocation} from 'react-router-dom'

export const Product = () => {
  const dispatch = useDispatch();
  const [searchParams,setSearchParams] =  useSearchParams();
  const location = useLocation()
    const {product,isError,isLoading} = useSelector((store)=>{
        return {
            product : store.productReducer.products,
            isLoading : store.productReducer.isLoading,
            isError : store.productReducer.isError,
        }
    })
    const initialSort = searchParams.get("price")
    const initialSortAlp = searchParams.get("title")
    const [order,setOrderData] = useState([]);


    const paramObj = {
      params:{
        category:searchParams.getAll("category"),
        gender : searchParams.getAll("gender"),
        // _sort:searchParams.get("order") && "price",
        // _order:searchParams.get("order")
      }
    }

    useEffect(()=>{
        dispatch(getProduct(paramObj))
    },[location.search])

  //  console.table(product)
const handleSortChange = (e)=>{
 const {value} = e.target
 setSearchParams(value)
}
// console.log(sortdata)


  return (
    <div className='side-bar'><Sidebar/>
    <DIV className='product-container'>
    <h1>All products</h1>
    <div className='total-sort-conatiner'>
    <Text fontSize='30px' color='black'>
  Total Product : 
</Text>
<select id="sort" onChange={handleSortChange}>
    <option value="">--Sort by Price--</option>
    <option value="price">Low to High</option>
    <option value="title">Ascending</option>
    <option value="title">Descending</option>
    <option value="price">High to Low</option>

</select>

    </div>
    <div className='loding-product'>{isLoading ? (<Spinner className='spinner'
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>) :(
   <div className='product-card'>

    {product?.map((ele)=>{
    return <ProductCard key={ele.id} {...ele} />

    })
    }
    </div>
)  }
{isError && <h2>Something went wrong...!</h2>}
</div>
    </DIV>
    </div>
  )
}


const DIV = styled.div`
/* border: 5px solid ; */
width: 100%;

background-color: #E0E0E0;
.product-card{
    display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 2rem;
}
.spinner{
  /* margin: auto; */
  /* border: 2px solid ; */
  /* margin-left: 50%; */
  margin-left: 70vh;
 margin-top: 40vh;
 /* margin-top: 15%; */
}

`;
