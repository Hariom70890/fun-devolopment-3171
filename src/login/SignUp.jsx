import {
   Flex,
   Box,
   FormControl,
   FormLabel,
   Input,
   InputGroup,
   HStack,
   InputRightElement,
   Stack,
   Button,
   Heading,
   Text,
   useColorModeValue,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const reducer = (state, action) => {
   switch (action.type) {
      case "FirstName": {
         return {
            ...state,
            firstName: action.payload,
         };
      }
      case "LastName": {
         return {
            ...state,
            lastName: action.payload,
         };
      }
      case "Email": {
         return {
            ...state,
            email: action.payload,
         };
      }
      case "Password": {
         return {
            ...state,
            password: action.payload,
         };
      }
      case "reset": {
         return initialState;
      }
      default: {
         return state;
      }
   }
};
const initialState = {
   firstName: "",
   lastName: "",
   email: "",
   password: "",
};

export default function SignupCard() {
   const [showPassword, setShowPassword] = useState(false);
   const [state, dispatch] = useReducer(reducer, initialState);
   const navigate = useNavigate();
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(state);
      axios.post(`https://json-example.onrender.com/user`, state);
      toast.success("Your Account is Created");
   };

   return (
      <Flex
         padding={"50px 10px"}
         background={"#42a5f5"}
         border-radius={"5px"}
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
               <Heading fontSize={"4xl"} textAlign={"center"}>
                  Sign up
               </Heading>
               <Text fontSize={"lg"}>to enjoy all of our cool features ✌️</Text>
            </Stack>
            <Box
               rounded={"lg"}
               bg={useColorModeValue("white", "gray.700")}
               boxShadow={"lg"}
               p={8}
            >
               <Stack
                  spacing={4}
                  box-shadow={
                     "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
                  }
               >
                  <HStack>
                     <Box>
                        <FormControl id="firstName" isRequired>
                           <FormLabel>First Name</FormLabel>
                           <Input
                              type="text"
                              placeholder="Enter FirstName"
                              value={state.firstName}
                              onChange={(e) =>
                                 dispatch({
                                    type: "FirstName",
                                    payload: e.target.value,
                                 })
                              }
                           />
                        </FormControl>
                     </Box>
                     <Box>
                        <FormControl id="lastName">
                           <FormLabel>Last Name</FormLabel>
                           <Input
                              type="text"
                              value={state.lastName}
                              placeholder="Enter LastName"
                              onChange={(e) =>
                                 dispatch({
                                    type: "LastName",
                                    payload: e.target.value,
                                 })
                              }
                           />
                        </FormControl>
                     </Box>
                  </HStack>
                  <FormControl id="email" isRequired>
                     <FormLabel>Email address</FormLabel>
                     <Input
                        type="email"
                        value={state.email}
                        placeholder="Enter Email Address"
                        onChange={(e) =>
                           dispatch({ type: "Email", payload: e.target.value })
                        }
                     />
                  </FormControl>
                  <FormControl id="password" isRequired>
                     <FormLabel>Password</FormLabel>
                     <InputGroup>
                        <Input
                           type={showPassword ? "text" : "password"}
                           value={state.password}
                           placeholder="Enter Password"
                           onChange={(e) =>
                              dispatch({
                                 type: "Password",
                                 payload: e.target.value,
                              })
                           }
                        />
                        <InputRightElement h={"full"}>
                           <Button
                              variant={"ghost"}
                              onClick={() =>
                                 setShowPassword(
                                    (showPassword) => !showPassword
                                 )
                              }
                           >
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                           </Button>
                        </InputRightElement>
                     </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                     <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                           bg: "blue.500",
                        }}
                        onClick={handleSubmit}
                     >
                        Sign up
                     </Button>
                  </Stack>
                  <Stack pt={6}>
                     <Text align={"center"} textDecor={"ButtonHighlight"}>
                        Already a user?
                        {/* <Link to='/login' color={'blue.400'}> */}
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
                              navigate("/login");
                           }}
                        >
                           Login
                        </Button>
                     </Text>
                  </Stack>
               </Stack>
            </Box>
         </Stack>
      </Flex>
   );
}
