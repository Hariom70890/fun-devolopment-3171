import React from "react";
import {
   Box,
   VStack,
   HStack,
   UnorderedList,
   ListItem,
   List,
   Input,
   Button,
   SimpleGrid,
} from "@chakra-ui/react";
import styled from "styled-components";

const Footer = () => {
   return (
      <DIV>
         <div className="fDiv">
            <img
               src="https://user-images.githubusercontent.com/112471219/236364309-5c7783e5-cca2-4152-9ff6-6eafb2c3474a.png"
               alt=""
               width="250px"
            />

            <h5>REAL DESIGNS BY REAL ARISTS</h5>
            <h5>FOR REAL PEOPLE</h5>
         </div>

         <div className="footerAbout">
            <div>
               <h5>PRODUCT</h5>
               <p>Jacket</p>
               <p>Shirt</p>
               <p>T-shirt</p>
               <p>Dresses</p>
               <p>Outwear</p>
               <p>Bottoms</p>
            </div>
            <div>
               <h5>BUYING</h5>
               <p>Shop</p>
               <p>Term of Use</p>
               <p>Privacy</p>
               <p>How & works</p>
               <p>Customer Services</p>
            </div>
            <div>
               <h5>SOCIAL</h5>
               <p>Instagram</p>
               <p>Facebook</p>
               <p>Twetter</p>
            </div>
         </div>

         <div className="footerEmail">
            <Input borderRadius={20} placeholder="EMAIL ADDRESS" />
            <Button colorScheme="orange" borderRadius={20}>
               Send
            </Button>
         </div>
      </DIV>
   );
};

export default Footer;

const DIV = styled.div`
   background-color: #161616;
   color: white;
   padding: 30px;
   display: flex;
   justify-content: space-between;

   .fDiv > img {
      height: 60px;
      border-radius: 20px;
      /* display: flex; */
   }
   .footerAbout {
      display: flex;
      gap: 30px;
      line-height: 10px;
      justify-content: space-between;
   }
   .footerAbout p {
      color: gray;
   }
   .fDiv > h5 {
      margin: 10px 0;
   }
   .footerEmail {
      display: flex;
      gap: 20px;
   }

   @media only screen and (max-width: 1024px) {
      flex-direction: column;

      .footerAbout p {
         color: gray;
         font-size: small;
      }
      .fDiv > h5,
      .footerAbout h5 {
         font-size: small;
      }
      .fDiv > img {
         width: 50%;
         border-radius: 20px;
      }
      .footerEmail {
         display: flex;
      }
   }
`;
