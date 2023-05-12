import React, { useEffect, useState } from "react";
// import "./Admin.css";
import styles from "./admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AdminCard } from "../Components/AdminCard";
import {
   Button,
   Text,
   position,
   useColorMode,
   useToast,
   useDisclosure,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import {
   Navigate,
   useLocation,
   useNavigate,
   useSearchParams,
} from "react-router-dom";
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
} from "@chakra-ui/react";
import { getProduct } from "../Api/action";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// export const x = true;
function App() {
   const [x, setX] = useState(true);
   const [employee, setEmployee] = useState([]);
   const [users, setUsers] = useState([]);
   const [orders, setOrders] = useState([]);
   const [totalIncome, setTotalIncome] = useState(0);
   const [searchParams, setSearchParams] = useSearchParams();
   const { isOpen, onOpen, onClose } = useDisclosure();
   const location = useLocation();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   // const [product, setProduct] = useState([]);
   const { product } = useSelector((store) => {
      return {
         product: store.productReducer.products,
      };
   });
   const paramObj = {
      params: {
         category: searchParams.getAll("category"),
         gender: searchParams.getAll("gender"),
         color: searchParams.getAll("color"),
         // _sort:searchParams.get("order") && "price",
         // _order:searchParams.get("order")
      },
   };

   useEffect(() => {
      dispatch(getProduct(paramObj));
   }, [location.search, x]);

   //    useEffect(()=>{
   // axios.get(`https://json-example.onrender.com/products`)
   // .then((res)=>setProduct(res.data))
   // .catch((err)=>console.log(err))
   //    },[x,product.length])

   const handleAdd = () => {
      navigate("/admindashboard/addProduct");
      setX(!x);
   };

   const employeeAdd = () => {
      navigate("/admindashboard/addemployee");
      setX(!x);
   };

   console.log(window.screen.width);
   if (window.screen.width > 1100) {
      return (
         <>
            <br />
            <br />
            <br />
            <br />
            <ToastContainer size="10px" />

            <nav>
               <h1>Hey! Admin Welcome</h1>
            </nav>
            <br />
            <Text fontSize="30px">Total Product :{product.length}</Text>
            <div className={styles.main_container}>
               <div className={styles.Boxes}>
                  <div
                     className={styles.smallBoxes}
                     onClick={onOpen}
                     style={{ backgroundColor: "rgb(244, 135, 222)" }}
                  >
                     <h2 id="ordreTotal">33</h2>
                     <p>Total Orders</p>
                  </div>
                  <div
                     className={styles.smallBoxes}
                     style={{ backgroundColor: "rgb(93, 162, 241)" }}
                  >
                     <h2 id="userTotal">8</h2>
                     <p>Total Registered Users</p>
                  </div>
                  <div
                     className={styles.smallBoxes}
                     style={{ backgroundColor: "rgb(226, 159, 71)" }}
                  >
                     <h2 id="incomeemployees">102</h2>
                     <p>Total Employees</p>
                  </div>
                  <div
                     className={styles.smallBoxes}
                     style={{ backgroundColor: "rgb(136, 234, 94)" }}
                  >
                     <h2 id={styles.incomeTotal}>863145</h2>
                     <p>Total Income</p>
                  </div>
               </div>
               {/* <h2 className={styles.notification}></h2> */}
               <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                     <ModalHeader>Modal Title</ModalHeader>
                     <ModalCloseButton />
                     <ModalBody>
                        <br />
                        <br />
                        <br />
                        There are total 33 available to be delivered
                     </ModalBody>

                     <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                           Close
                        </Button>
                        <br />
                     </ModalFooter>
                  </ModalContent>
               </Modal>

               <div className={styles.middleContainer}>
                  <div className={styles.buttonContainer}>
                     <button
                        className={styles.btnsnm}
                        onClick={onOpen}
                        style={{ backgroundColor: "#64DD17" }}
                     >
                        Track All Orders
                     </button>
                     <button
                        className={styles.btnsnm}
                        onClick={() => {
                           navigate("/signup");
                        }}
                        style={{ backgroundColor: "rgb(93, 162, 241)" }}
                     >
                        Add New User
                     </button>
                     <button
                        className={styles.btnsnm}
                        onClick={handleAdd}
                        style={{ backgroundColor: "#304FFE" }}
                     >
                        Add Products
                     </button>
                     <button
                        className={styles.btnsnm}
                        onClick={employeeAdd}
                        style={{ backgroundColor: "rgb(226, 159, 71)" }}
                     >
                        Add New Employee
                     </button>
                     <button
                        className={styles.btnsnm}
                        onClick={() =>
                           alert(
                              "We are Selling Our Domain On upcoming Few days. "
                           )
                        }
                        style={{ backgroundColor: "rgb(244, 135, 222)" }}
                     >
                        Sell Your Domain
                     </button>
                  </div>
                  <div className={styles.cardContainer}>
                     {product.map((e) => {
                        return <AdminCard key={e.id} {...e} setX={setX} />;
                     })}
                  </div>
               </div>
            </div>
         </>
      );
   } else {
      return (
         <>
            <br />
            <br />
            <br />
            <br />
            <h1>Please Login With Desktop To Work As Admin</h1>
         </>
      );
   }
}
export default App;
