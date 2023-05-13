import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../Components/ProductCard";
import styled from "styled-components";
import { Spinner } from "@chakra-ui/react";

export const Men = () => {
   const [maleData, setMaleData] = useState([]);
   const [isLoading, setIsLoading] = useState(null);
   //  let isLoading = true;
   const getMenFunction = () => {
      setIsLoading(true);
      axios.get(`https://json-example.onrender.com/products`).then((res) => {
         const upDatedMenData = res.data.filter((ele) => ele.gender == "male");
         // console.log("ddd",upDatedMenData)
         setMaleData(upDatedMenData);
         setIsLoading(false);
      });
   };
   useEffect(() => {
      getMenFunction();
   }, []);

   return (
      <div>
         {isLoading ? (
            <Spinner
               style={{
                  marginLeft: "50%",
                  marginTop: "40vh",
                  marginBottom: "100px",
               }}
               thickness="4px"
               speed="0.65s"
               emptyColor="gray.200"
               color="blue.500"
               size="xl"
            />
         ) : (
            <div className="product-card" style={{ paddingTop: "100px" }}>
               {maleData?.map((ele) => {
                  return <ProductCard key={ele.id} {...ele} />;
               })}
            </div>
         )}
      </div>
   );
};
