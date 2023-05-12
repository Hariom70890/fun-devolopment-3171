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
  } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useReducer, useState } from 'react';

  import {Link, Navigate, json} from 'react-router-dom'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { AdminFailure, AdminSuccess, LoginFailure, LoginSuccess } from '../Redux/Login/action';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalstorageData, setLocalstorageData } from '../Api/LocalStorage';


  const reducer=(state,action)=>{
    switch(action.type){
      case "Email":{
        return{
          ...state,
          email:action.payload
        }
      }
      case "Password":{
        return{
          ...state,
          password:action.payload
        }
      }
      case "reset":{
        return initialState
       
      }
      default :{
        return state
      }
    }
  }

  const initialState={
    email:"",
    password:""
  }
  
  export default function Login() {
    const dispatchh=useDispatch()
    const [state,dispatch]=useReducer(reducer,initialState)
    const auth=useSelector((store)=>store.AuthReducer.isAuth)
    const adminAuth=useSelector((store)=>store.AuthReducer.adminAuth)
console.log(state)
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://json-example.onrender.com/user`)
      const users = response.data;
      
      const user = users.find((u) => u.email === state.email && u.password === state.password&&u.email!="admin"&&u.password!="admin");
      const admin=users.find((u)=>u.email=="admin@gmail.com"&&u.password=="admin")

      if(admin){
        dispatchh(AdminSuccess(true))
       
      }else{
        dispatchh(AdminFailure(false))
       
      }
  
      if (user) {
        toast.success('✔ successfully login');
        dispatchh(LoginSuccess(true))
       
       
      } else {
        toast.error('plz check your email or password');
        dispatch(LoginFailure(false))
       
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleLogin = () => {
    fetchData();
  }
if(auth){
  console.log("User Login Successful")
  return <Navigate to="/" />
}
if(adminAuth){
  alert('Admin Login Successful')
  return <Navigate to="/admindashboard" />
}
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        // bg={useColorModeValue('gray.50', 'gray.800')}
        >  
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
          <Box height={"5"}></Box>
            <Heading fontSize={'4xl'}>Login into your Account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
           
          </Stack>
          <Box
            rounded={'lg'}
            // bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <ToastContainer size='10px'/>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={state.email} onChange={(e)=>dispatch({type:"Email",payload:e.target.value})} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={state.password} onChange={(e)=>dispatch({type:"Password",payload:e.target.value})} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleLogin}
                  >
                  Log-in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Register ? 
                  
                  <Link to='/signup' color={'blue.400'}>
                    <Button variant={'link'} >SignUp</Button>
                  </Link>
                 
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }