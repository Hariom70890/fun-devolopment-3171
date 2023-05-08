import React from "react";
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
import { Link } from "react-router-dom";
import { getLocalstorageData } from "../Api/LocalStorage";

export default function App() {


  const handleGetOtp = ()=>{
    let ans = Math.floor(Math.random()*9000)+1000;
    alert(`Your OTP for Payment is :- ${ans}`)
  }

  return (
    <div style={{paddingTop:"40px"}}>
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
              <p style={{color:"blue",fontSize:"20px"}}>Enter Your Card Number</p>
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
                    //   value="**** **** **** 3193"
                    />
                  </div>
                </div>
                {/* <a href="#!">Remove card</a> */}
              </div>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
               
              </div>
              
              <p style={{color:"blue",fontSize:"20px"}}>Enter Your Mobile Number</p>
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
      <p>Click Here To ? <span style={{color:"blue"}}> <button onClick={handleGetOtp}><u>Get OTP</u></button></span> </p>
      <MDBCol size="4">
                  <MDBInput
                    label="Enter OTP"
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="Enter Your OTP"
                  />
                </MDBCol>
                <div style={{marginBottom: "20px"}}></div>
              <MDBBtn color="success" size="lg" block>
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