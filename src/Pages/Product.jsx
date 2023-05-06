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
    // const initialSort = searchParams.get("price")
    // const initialSortAlp = searchParams.get("title")
    const [order,setOrderData] = useState("");
    const [title,setTitle] = useState("");
    // const [currentPage, setCurrentPage] = useState(1);
    // const [pageSize, setPageSize] = useState(10);
// console.log(initialSort)

  // useEffect(()=>{
  //     setSearchParams(order)
  // },[order])

    const paramObj = {
      params:{
        category:searchParams.getAll("category"),
        gender : searchParams.getAll("gender"),
        color : searchParams.getAll("color"),
        _sort: order ? "price" :  title ? "title" : undefined, 
        _order: order || title || undefined,
        // _page: currentPage,
        // _limit: pageSize,
      }
      
    }

    useEffect(()=>{
        dispatch(getProduct(paramObj))
    },[location.search,order,title])//currentPage, pageSize


    // else {
    //   setOrderData(value);
    //   setTitle("");
    // }
    const handleSortChange = (e) => {
      const value = e.target.value;
    
      if (value =="title_asc") {
        setTitle("asc");
        setOrderData("");
      } else if (value =="title_desc") {
        setTitle("desc");
        setOrderData("");
      } 
      else if(value == "asc"){
        setOrderData("asc");
        setTitle("")
      }
      else if(value == "desc"){
        setOrderData("desc");
        setTitle("")
      }
      else if (value == undefined){
        setOrderData(undefined);
        setTitle(undefined)
      }
    };
    // function handleIncrement() {
    //   setCurrentPage(currentPage + 1);
    // }
  
    // function handleDecrement() {
    //   setCurrentPage(currentPage - 1);
    // }
    // const handlePageChange = (page) => {
    //   setCurrentPage(page +1);
    // };
    // const pageCount = Math.ceil(product.length/pageSize);

    // const startIndex = (currentPage - 1) * pageSize;
    // const endIndex = startIndex + pageSize;
    // const pagedProduct = product.slice(startIndex, endIndex);
    

// const handleSortChange = (e)=>{
//  const {value} = e.target
// setTitle(value)
//  setOrderData(value)
// }


// console.log(sortdata)
// console.log(product.length)
// setLocalstorageData("total",product.length)
//  const GenderforDisplay = getDataGenderLS.charAt(0).toUpperCase() + getDataGenderLS.slice(1);
//  getDataCategoryLS = getDataCategoryLS.charAt(0).toUpperCase() + getDataCategoryLS.slice(1);

  return (
    <div className='side-bar'><Sidebar/>
    <DIV className='product-container'>

    <div className='total-sort-conatiner'>
    <Text fontSize='30px' color='black'>
  Total Product :{product.length}
</Text>

    <Text className='text-cat' fontSize='30px' color='gray'>{getDataCategoryLS.charAt(0).toUpperCase() + getDataCategoryLS.slice(1)}</Text>
<select id="sort" value={order} onChange={handleSortChange}>
    <option value="undefined">--Sort by Price--</option>

    <option value="asc">Low to High</option>
    <option value="title_asc">Ascending</option>
    <option value="title_desc">Descending</option>
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
   {/* <div>
      <button onClick={handleIncrement}>++</button>
      <button onClick={handleDecrement}>--</button>
    </div> */}
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
