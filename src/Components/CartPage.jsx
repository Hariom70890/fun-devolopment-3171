import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {
   Input,
   Button,
   Center,
   Box,
   useDisclosure,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";

const CartPage = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [scrollBehavior, setScrollBehavior] = React.useState("inside");

   const [address, setaddress] = useState({});

   const [name, setname] = useState("");
   const [mobile, setmobile] = useState("");
   const [email, setemail] = useState("");
   const [pin, setpin] = useState("");
   const [city, setcity] = useState("");
   const [state, setstate] = useState("");
   const [country, setcountry] = useState("");
   const [building, setbuilding] = useState("");
   const [area, setarea] = useState("");
   const [landmark, setlandmark] = useState("");
   const [gstin, setgstin] = useState("");

   const nav = useNavigate();

   const HandleSubmit = (e) => {
      e.preventDefault();
      if (
         name !== "" &&
         mobile !== "" &&
         email !== "" &&
         pin !== "" &&
         city !== "" &&
         state !== "" &&
         country !== "" &&
         building !== "" &&
         area !== ""
      ) {
         setaddress({
            name,
            mobile,
            email,
            pin,
            city,
            state,
            country,
            building,
            area,
            landmark,
            gstin,
         });
         alert("Added all the details");
         nav("/payment");
      } else {
         alert("Please fill all the details");
      }
   };

   const btnRef = React.useRef(null);

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

   // console.log("data",Data)

   const handledelete = (id) => {
      axios.delete(`https://json-example.onrender.com/cart/${id}`).then(() =>
         // console.log(res.data)
         handleadd()
      );
   };

   const handlequantity = (id, val) => {
      //console.log("op",id,val)
      let filteredData = Data.filter((el) =>
         el.id === id ? (el.quantity += val) : el
      );
      //  console.log(filteredData)
      setData(filteredData);
      console.log("hari");
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
      <div>
         <section className="h-100 gradient-custom">
            <div className="container py-5">
               <div className="row d-flex justify-content-center my-4">
                  <div className="col-md-8">
                     <div className="card mb-4">
                        <div className="card-header py-3">
                           <h5 className="mb-0">Cart - {Data.length}</h5>
                        </div>
                        <div className="card-body">
                           {Data.map((item) => (
                              <div className="row">
                                 <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                    <div className="bg-image hover-overlay hover-zoom ripple rounded">
                                       <img
                                          src={item.image}
                                          className="w-100"
                                          alt="xyz"
                                       />
                                       <a href="#!">
                                          <div className="mask"></div>
                                       </a>
                                    </div>
                                 </div>

                                 <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                    <p>
                                       <strong>{item.title}</strong>
                                    </p>
                                    <p>Color:{item.color}</p>
                                    <p>Size: M</p>

                                    <button
                                       type="button"
                                       className="btn btn-primary btn-sm me-1 mb-2"
                                       data-mdb-toggle="tooltip"
                                       title="Remove item"
                                       onClick={() => handledelete(item.id)}
                                    >
                                       <i className="fas fa-trash"></i>
                                    </button>
                                    <button
                                       type="button"
                                       className="btn btn-danger btn-sm mb-2"
                                       data-mdb-toggle="tooltip"
                                       title="Move to the wish list"
                                    >
                                       <i className="fas fa-heart"></i>
                                    </button>
                                 </div>

                                 <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                    <div
                                       className="d-flex mb-4"
                                       style={{ maxwidth: "300px" }}
                                    >
                                       <button
                                          className="btn btn-primary px-3 me-2"
                                          disabled={item.quantity === 1}
                                          onClick={() =>
                                             handlequantity(item.id, -1)
                                          }
                                       >
                                          <i className="fas fa-minus"></i>
                                       </button>

                                       <div className="form-outline">
                                          {/* <input id="form1" min="0" name="quantity"
                              value={item.quantity}

                              type="number" className="form-control" /> */}

                                          <h5 style={{ textAlign: "center" }}>
                                             {item.quantity}
                                          </h5>

                                          <label
                                             className="form-label"
                                             for="form1"
                                          >
                                             Quantity
                                          </label>
                                       </div>

                                       <button
                                          className="btn btn-primary px-3 ms-2"
                                          onClick={() =>
                                             handlequantity(item.id, 1)
                                          }
                                       >
                                          <i className="fas fa-plus"></i>
                                       </button>
                                    </div>

                                    <p className="text-start text-md-center">
                                       <strong>price: ₹ {item.price}</strong>
                                    </p>
                                    <p className="text-start text-md-center">
                                       <strong></strong>
                                    </p>
                                 </div>
                              </div>
                           ))}

                           <hr className="my-4" />
                        </div>
                     </div>
                     <div className="card mb-4">
                        <div className="card-body">
                           <p>
                              <strong>Expected shipping delivery</strong>
                           </p>
                           <p className="mb-0">12.10.2020 - 14.10.2020</p>
                        </div>
                     </div>

                     <div
                        className="card mb-4 mb-lg-0"
                        style={{ width: "20%" }}
                     >
                        <p>
                           <strong>We accept</strong>
                        </p>
                        <div
                           className="card-body"
                           style={{
                              display: "flex",
                              flex: "column",
                              gap: "5px",
                           }}
                        >
                           <img
                              className="me-2"
                              width="45px"
                              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                              alt="Visa"
                           />
                           <img
                              className="me-2"
                              width="45px"
                              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                              alt="American Express"
                           />
                           <img
                              className="me-2"
                              width="45px"
                              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                              alt="Mastercard"
                           />
                           {/* <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal " /> */}
                        </div>
                     </div>
                  </div>

                  <div className="col-md-4">
                     <div className="card mb-4">
                        <div className="card-header py-3">
                           <h5 className="mb-0">Summary</h5>
                        </div>
                        <div className="card-body">
                           <ul className="list-group list-group-flush">
                              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                 Products
                                 <span>{price}</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                 Shipping
                                 <span>None</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                 <div>
                                    <strong>Total amount</strong>
                                    <strong>
                                       <p className="mb-0">(including VAT)</p>
                                    </strong>
                                 </div>
                                 <span>
                                    <strong> ₹ {price}</strong>
                                 </span>
                              </li>
                           </ul>

                           <button
                              type="button"
                              className="btn btn-primary btn-lg btn-block"
                              ref={btnRef}
                              onClick={onOpen}
                              mt={3}
                           >
                              Go to checkout
                           </button>
                        </div>
                     </div>
                     <button
                        type="button"
                        className="btn btn-primary btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove All"
                        onClick={handledeleteAll}
                     >
                        <i className="fas fa-trash"></i>
                     </button>
                  </div>
               </div>
            </div>
         </section>

         <Modal
            onClose={onClose}
            finalFocusRef={btnRef}
            isOpen={isOpen}
            scrollBehavior={scrollBehavior}
         >
            <ModalOverlay />
            <ModalContent>
               {/* <ModalHeader>ADD ADDRESS</ModalHeader> */}
               <ModalCloseButton />
               <ModalBody>
                  <form onSubmit={HandleSubmit}>
                     <Input
                        variant="flushed"
                        label=""
                        m={3}
                        id="first-name"
                        placeholder="Full name *"
                        onChange={(e) => setname(e.target.value)}
                     />
                     <Input
                        variant="flushed"
                        label=""
                        m={3}
                        id="last-name"
                        placeholder="Mobile *"
                        onChange={(e) => setmobile(e.target.value)}
                     />
                     <Input
                        variant="flushed"
                        label=""
                        m={3}
                        id="last-name"
                        placeholder="Email Address *"
                        onChange={(e) => setemail(e.target.value)}
                     />
                     <Box display="flex" justifyContent="space-evenly">
                        <Input
                           variant="flushed"
                           label=""
                           m={3}
                           id="last-name"
                           placeholder="Pincode *"
                           onChange={(e) => setpin(e.target.value)}
                        />
                        <Input
                           variant="flushed"
                           label=""
                           m={3}
                           id="last-name"
                           placeholder="City *"
                           onChange={(e) => setcity(e.target.value)}
                        />
                        <Input
                           variant="flushed"
                           label=""
                           m={3}
                           id="last-name"
                           placeholder="State *"
                           onChange={(e) => setstate(e.target.value)}
                        />
                        <Input
                           variant="flushed"
                           label=""
                           m={3}
                           id="last-name"
                           placeholder="Country *"
                           onChange={(e) => setcountry(e.target.value)}
                        />
                     </Box>
                     <Input
                        variant="flushed"
                        label=""
                        m={3}
                        id="last-name"
                        placeholder="Flat No/Building, Street Name *"
                        onChange={(e) => setbuilding(e.target.value)}
                     />
                     <Input
                        variant="flushed"
                        label=""
                        m={3}
                        id="last-name"
                        placeholder="Area/Locality *"
                        onChange={(e) => setarea(e.target.value)}
                     />
                     <Input
                        variant="flushed"
                        label=""
                        m={3}
                        id="last-name"
                        placeholder="Landmark"
                        onChange={(e) => setlandmark(e.target.value)}
                     />
                     <Input
                        variant="flushed"
                        label=""
                        m={3}
                        id="last-name"
                        placeholder="GSTIN"
                        onChange={(e) => setgstin(e.target.value)}
                     />

                     <p>PS. Your information is safe with us, No spam.</p>

                     <Center>
                        <ModalFooter>
                           <Button type="submit">ADD ADDRESS</Button>
                        </ModalFooter>
                     </Center>
                  </form>
               </ModalBody>
            </ModalContent>
         </Modal>
      </div>
   );
};

export default CartPage;
