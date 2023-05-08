import axios from "axios"
import { useEffect, useState } from "react"
import { ProductCard } from "../Components/ProductCard";
import styled from "styled-components";

export const Men = ( ) =>{
    const [maleData,setMaleData] = useState([]);

    const getMenFunction=()=>{
      axios.get(`https://v6dej6.sse.codesandbox.io/products`)
      .then((res)=>{
        const upDatedMenData = res.data.filter((ele)=> ele.gender == "male");
        console.log("ddd",upDatedMenData)
        setMaleData(upDatedMenData)
      })
    }
    useEffect(()=>{
        getMenFunction()
    },[])
    return(
        
        <div className='product-card' style={{paddingTop:"100px"}} >
    {maleData?.map((ele)=>{
    return <ProductCard key={ele.id} {...ele} />
    })
    }
    </div>
    )
}
