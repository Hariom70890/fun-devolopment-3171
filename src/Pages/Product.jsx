
import React, { useEffect, useState } from 'react'
import "../Css/product.css"
import { Button } from '@chakra-ui/react'
import { useDispatch, useSelector, } from 'react-redux'
import { getProduct } from '../Api/action'
import { ProductCard } from '../Components/ProductCard'
import styled from '@emotion/styled';
import { Spinner, Text } from '@chakra-ui/react'
import { Sidebar, passFun } from '../Components/Sidebar';
import { useSearchParams ,useLocation, useParams} from 'react-router-dom'
import { getLocalstorageData, setLocalstorageData } from '../Api/LocalStorage'

export const Product = () => {
  let getDataCategoryLS = getLocalstorageData("headingCat")
  let getDataGenderLS = getLocalstorageData("headingGen")
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
    const [order,setOrderData] = useState("");
    const [title,setTitle] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);

    const paramObj = {
      params:{
        category:searchParams.getAll("category"),
        gender : searchParams.getAll("gender"),
        color : searchParams.getAll("color"),
        _sort: order ? "price" :  title ? "title" : undefined, 
        _order: order || title || undefined,
        _page: currentPage,
        _limit: pageSize,
      }
      
    }

    useEffect(()=>{
        dispatch(getProduct(paramObj))
    },[location.search,order,title,currentPage, pageSize])//
    

    const handleSortChange = (e) => {
      const value = e.target.value;

      if (value == "title_asc") {
         setTitle("asc");
         setOrderData("");
      } else if (value == "title_desc") {
         setTitle("desc");
         setOrderData("");
      } else if (value == "asc") {
         setOrderData("asc");
         setTitle("");
      } else if (value == "desc") {
         setOrderData("desc");
         setTitle("");
      } else if (value == undefined) {
         setOrderData(undefined);
         setTitle(undefined);
      }

    };
    const handleIncrement =()=>{
      setCurrentPage((pre)=>pre + 1);
      // setCurrentPage(currentPage + 1);
      // console.log(currentPage,"mmmm")
    }
    const handleDecrement =()=>{
      setCurrentPage((pre)=>pre - 1);
      // console.log(currentPage,"mmmm")
    }

   
  return (
    <div className='side-bar'><Sidebar/>
    <DIV className='product-container'>

    <div className='total-sort-conatiner'>
    <Text fontSize='30px' mt={'auto'}>
  Total Product :{product.length}
</Text>
<Text pt="5" className='text-cat' fontSize='30px' color='gray'>{
  (getDataCategoryLS || "").charAt(0).toUpperCase()+(getDataCategoryLS ||"").slice(1)
}</Text>
    {/* <Text className='text-cat' fontSize='30px' color='gray'>{getDataCategoryLS.charAt(0).toUpperCase() + getDataCategoryLS.slice(1)}</Text> */}
<select id="sort" value={order} onChange={handleSortChange}>
    <option value="undefined">--Select a Option--</option>

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
<div className="pagination">
    <Button isDisabled={+currentPage== 1} colorScheme='teal' onClick={handleDecrement}>Previous</Button>
    <span className='center'>{currentPage}</span>
    <Button colorScheme='teal' style={{width:"80px"}} onClick={handleIncrement}>Next</Button>
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
.pagination{
  position: absolute;
  top: 215vh;
  left: 50%;
  /* border: 2px solid red; */
  /* transform: translate(-50%, -50%); */

}
.center{
  /* border: 1px solid gray; */
  /* padding: 5px; */
  margin: auto;
  font-size: 30px;
  margin-left: 5px;
  margin-right: 5px;
}


`;
