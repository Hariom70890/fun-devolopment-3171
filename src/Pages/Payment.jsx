import React, { useEffect, useState } from "react";
import axios from "axios";
import {
   MDBBtn,
   MDBCard,
   MDBCardBody,
   MDBCol,
   MDBContainer,
   MDBInput,
   MDBRow,
} from "mdb-react-ui-kit";
import { Input, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { getLocalstorageData } from "../Api/LocalStorage";

export default function Payment() {
   const navigate = useNavigate();

   const paymentdone = () => {
      // alert("order successful")

      navigate("/paymentdone");
      setTimeout(() => {
         navigate("/shop");
      }, 3000);
      handledeleteAll();
   };

   const handleGetOtp = () => {
      let ans = Math.floor(Math.random() * 9000) + 1000;
      alert(`Your OTP for Payment is :- ${ans}`);
   };

   const [Data, setData] = useState([]);

   // console.log("Data", Data)

   const handleadd = () => {
      axios.get(`https://json-example.onrender.com/cart`).then((res) => {
         //console.log("res",res.data)
         let updateddata = res.data.map((el) => ({ ...el, quantity: 1 }));
         //  console.log("ooo",updateddata)
         setData(updateddata);
      });
   };

   const [price, setPrice] = useState(0);

   // console.log("price", price)

   const total = () => {
      let price = 0;
      Data.map((item) => (price += item.price * item.quantity));
      setPrice(price);
   };

   useEffect(() => {
      total();
   }, [total]);

   useEffect(() => {
      handleadd();
      catchid();
   }, []);

   const [idd, setidd] = useState([]);
   const catchid = () => {
      axios.get(`https://json-example.onrender.com/cart`).then((res) => {
         //console.log("res",res.data)
         let iddata = res.data.map((el) => el.id);
         //  console.log("ooo",updateddata)
         setidd(iddata);
      });
   };

   console.log("idd", idd);

   const handledeleteAll = () => {
      for (let i = 0; i < idd.length; i++) {
         axios
            .delete(`https://json-example.onrender.com/cart/${idd[i]}`)
            .then(() => {
               handleadd();
            });
      }
   };

   return (
      <div style={{ paddingTop: "40px" }}>
         <MDBContainer
            className="py-5"
            fluid
            style={{
               backgroundImage:
                  "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
            }}
         >
            <MDBRow className=" d-flex justify-content-center">
               <MDBCol md="10" lg="8" xl="5">
                  <MDBCard className="rounded-3">
                     <MDBCardBody className="p-4">
                        <div className="text-center mb-4">
                           <h3>Payment</h3>
                           {/* <h6>Payment</h6> */}
                        </div>
                        <p style={{ color: "blue", fontSize: "20px" }}>
                           Enter Your Card Number
                        </p>
                        <div className="d-flex flex-row align-items-center mb-4 pb-1">
                           <img
                              className="img-fluid"
                              src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                           />
                           <div className="flex-fill mx-3">
                              <div className="form-outline">
                                 <MDBInput
                                    label="Card Number"
                                    id="form1"
                                    type="text"
                                    size="lg"
                                    maxLength={16}
                                    //   value="** ** ** 3193"
                                 />
                              </div>
                           </div>
                           {/* <a href="#!">Remove card</a> */}
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4 pb-1"></div>

                        <p style={{ color: "blue", fontSize: "20px" }}>
                           Enter Your Mobile Number
                        </p>
                        <MDBRow className="my-4">
                           <MDBCol size="7">
                              <MDBInput
                                 label="Mobile Number"
                                 id="form4"
                                 type="text"
                                 size="lg"
                              />
                           </MDBCol>
                           <MDBCol size="3">
                              <MDBInput
                                 label="Expire"
                                 id="form5"
                                 type="password"
                                 size="lg"
                                 placeholder="MM/YYYY"
                              />
                           </MDBCol>
                           <MDBCol size="2">
                              <MDBInput
                                 label="CVV"
                                 id="form6"
                                 type="password"
                                 size="lg"
                                 placeholder="CVV"
                              />
                           </MDBCol>
                        </MDBRow>
                        <p>
                           Click Here To ?{" "}
                           <span style={{ color: "blue" }}>
                              {" "}
                              <button onClick={handleGetOtp}>
                                 <u>Get OTP</u>
                              </button>
                           </span>{" "}
                        </p>
                        <MDBCol size="4">
                           <MDBInput
                              label="Enter OTP"
                              id="form6"
                              type="password"
                              size="lg"
                              placeholder="Enter Your OTP"
                           />
                        </MDBCol>
                        <div style={{ marginBottom: "20px" }}></div>
                        <MDBBtn
                           color="success"
                           size="lg"
                           block
                           onClick={paymentdone}
                        >
                           Click to Proceed
                        </MDBBtn>
                     </MDBCardBody>
                  </MDBCard>
               </MDBCol>
            </MDBRow>
         </MDBContainer>
      </div>
   );
}
