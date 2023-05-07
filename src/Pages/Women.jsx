import axios from "axios"
import { useEffect, useState } from "react"
import { ProductCard } from "../Components/ProductCard";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProduct } from "../Api/action";

export const Women = ( ) =>{
    const [femaleData,setFemale] = useState([]);

    const getMenFunction=()=>{
      axios.get(`https://v6dej6.sse.codesandbox.io/products`)
      .then((res)=>{
        const upDatedFemaleData = res.data.filter((ele)=> ele.gender == "female");
        setFemale(upDatedFemaleData)
      })
    }
    useEffect(()=>{
        getMenFunction()
    },[])
    return(
        
        <div className='product-card' style={{paddingTop:"100px"}} >
    {femaleData?.map((ele)=>{
    return <ProductCard key={ele.id} {...ele} />
    })
    }
    </div>
    )
}

