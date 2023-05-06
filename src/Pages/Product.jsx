import React, { useEffect, useState } from 'react'
import "../Css/product.css"
import { useDispatch, useSelector, } from 'react-redux'
import { getProduct } from '../Api/action'
import { ProductCard } from '../Components/ProductCard'
import styled from '@emotion/styled';
import { Spinner, Text } from '@chakra-ui/react'
import { Stack} from '@chakra-ui/react'
import { Sidebar, passFun } from '../Components/Sidebar';
import { useSearchParams ,useLocation, useParams} from 'react-router-dom'
import { getLocalstorageData, setLocalstorageData } from '../Api/LocalStorage'
import { auto } from '@popperjs/core'

export const Product = () => {
  // let getDataCategoryLS = getLocalstorageData("headingCat")
  // let getDataGenderLS = getLocalstorageData("headingGen")
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
    // const initialSortAlp = searchParams.get("title")
    const [order,setOrderData] = useState(initialSort || "");


    const paramObj = {
      params:{
        category:searchParams.getAll("category"),
        gender : searchParams.getAll("gender"),
        color : searchParams.getAll("color"),
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
 setOrderData(value)
//  console.log(value)
}
// console.log(sortdata)
// console.log(product.length)
// setLocalstorageData("total",product.length)
//  const GenderforDisplay = getDataGenderLS.charAt(0).toUpperCase() + getDataGenderLS.slice(1);
//  getDataCategoryLS = getDataCategoryLS.charAt(0).toUpperCase() + getDataCategoryLS.slice(1);

  return (
    <div className='side-bar'><Sidebar/>
    <DIV className='product-container'>
    {/* <Text className='text-male' fontSize='40px' color='black'>{GenderforDisplay}</Text> */}
    <div className='total-sort-conatiner'>
    <Text fontSize='30px' color='black'>
  Total Product :{product.length}
</Text>
    {/* <Text className='text-cat' fontSize='30px' color='gray'>{getDataCategoryLS.charAt(0).toUpperCase() + getDataCategoryLS.slice(1)}</Text> */}
<select id="sort" onChange={handleSortChange}>
    <option value="">--Sort by Price--</option>
    <option value="asc">Low to High</option>
    {/* <option value="asc">Ascending</option>
    <option value="desc">Descending</option> */}
    <option value="desc">High to Low</option>

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
</div>
    </DIV>
{isError && <h2>Something went wrong...!</h2>}
    </div>
  )
}


const DIV = styled.div`
width: 100%;
.spinner{
  margin-left: 70vh;
 margin-top: 20vh;
}

`;
