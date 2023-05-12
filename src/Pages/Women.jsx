import axios from "axios"
import { useEffect, useState } from "react"
import { ProductCard } from "../Components/ProductCard";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProduct } from "../Api/action";
import { Spinner } from "@chakra-ui/react";
import  {userlogin}  from "../login/Login";

export const Women = ( ) =>{
    const [femaleData,setFemale] = useState([]);
    const [isLoading,setIsLoading] = useState(null)
    const getMenFunction=()=>{
      setIsLoading(true)
      axios.get(`https://json-example.onrender.com/products`)
      .then((res)=>{
        const upDatedFemaleData = res.data.filter((ele)=> ele.gender == "female");
        setFemale(upDatedFemaleData)
        setIsLoading(false)
      })
    }
    useEffect(()=>{
        getMenFunction()
    },[])

  console.log(userlogin)
    return(
      <div>{isLoading ? (<Spinner style={{marginLeft: "50%" , marginTop: "40vh" ,marginBottom:"100px"}}
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />):(

        <div className='product-card' style={{paddingTop:"100px"}} >
    {femaleData?.map((ele)=>{
    return <ProductCard key={ele.id} {...ele} />
    })
    }
    </div>
    )
      }
      </div>
    )
}


