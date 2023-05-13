import {
   Flex,
   Box,
   FormControl,
   FormLabel,
   Input,
   Checkbox,
   Stack,
   Button,
   Heading,
   Text,
   useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminSuccess, LoginSuccess } from "../Redux/Login/action";
export const userlogin = false;

export default function Login() {
   const isAuth = useSelector((store) => store.AuthReducer.isAuth);
   console.log("auth value ", isAuth);

   const [user, setUser] = useState([]);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   useEffect(() => {
      axios
         .get(`https://json-example.onrender.com/user`)
         .then((res) => setUser(res.data));
   }, []);

   const dispatch = useDispatch();
   const [userlogin, setUserlogin] = useState(false);
   const [adminLogin, setAdminLogin] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();

   const [x, setx] = useState(true);
   console.log(userlogin);
   const handleLogin = () => {
      user.map((e) => {
         if (
            e.email == email &&
            e.password == password &&
            email === "admin" &&
            password === "admin"
         ) {
            dispatch(AdminSuccess());
            alert("Admin is logined Success");
            navigate("/admindashboard");
            // setAdminLogin(true);
         } else if (
            e.email == email &&
            e.password == password &&
            email !== "admin" &&
            password !== "admin"
         ) {
            // alert("User is logined Success")
            // setUserlogin(true);
            dispatch(LoginSuccess());
            toast.success("✔ successfully login");
            alert("✔ successfully login");
console.log(location.state.from)
const pa = location.state.from
            navigate(`${pa}`);
         }
      });

      
   };


   return (
      <Flex
         padding={"50px 10px"}
         background={"#42a5f5"}
         minH={"100vh"}
         align={"center"}
         justify={"center"}
         width={"70%"}
         margin={"auto"}
         box-shadow={
            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
         }
      >
         <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
               <Box height={"5"}></Box>
               <Heading fontSize={"4xl"}>Login into your Account</Heading>
               <Text fontSize={"lg"} color={"gray.600"}>
                  to enjoy all of our cool{" "}
                  <Link color={"blue.400"}>features</Link> ✌️
               </Text>
            </Stack>
            <Box
               rounded={"lg"}
               boxShadow={"lg"}
               bg={useColorModeValue("white", "gray.700")}
               p={8}
            >
               <Stack
                  spacing={4}
                  box-shadow={
                     "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
                  }
               >
                  <ToastContainer size="10px" />
                  <FormControl id="email">
                     <FormLabel>Email address</FormLabel>
                     <Input
                        required
                        type="email"
                        value={email}
                        placeholder="Enter Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </FormControl>
                  <FormControl id="password">
                     <FormLabel>Password</FormLabel>
                     <Input
                        type="password"
                        value={password}
                        placeholder="Enter Your Password"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </FormControl>
                  <Stack spacing={10}>
                     <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                     >
                        <Checkbox>Remember me</Checkbox>
                        <Link color={"blue.400"}>Forgot password?</Link>
                     </Stack>
                     <Button
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                           bg: "blue.500",
                        }}
                        onClick={handleLogin}
                     >
                        Log-in
                     </Button>
                  </Stack>
                  <Stack pt={6}>
                     <Text align={"center"}>
                        Register ?
                        <Button
                           bg={"blue.400"}
                           color={"white"}
                           _hover={{
                              bg: "blue.500",
                           }}
                           padding={"10px"}
                           margin={"10px"}
                           width={"100px"}
                           onClick={() => {
                              navigate("/signup");
                           }}
                        >
                           Sign Up
                        </Button>
                     </Text>
                  </Stack>
               </Stack>
            </Box>
         </Stack>
      </Flex>
   );
}
