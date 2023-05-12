import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    HStack,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router';
import { postRequestForCart } from '../Api/action';
import { toast } from 'react-toastify';
  
  export default function SingleProductPage() {
    const [data,setData]=useState({})
let idNo=useParams()
console.log(idNo.id)
const fetchData=()=>axios.get(`https://v6dej6.sse.codesandbox.io/products/${idNo.id}`)
.then((res)=>{setData( res.data)})

useEffect(()=>{
fetchData()
},[])

const handleCartPage =()=>{
  postRequestForCart(data);
  toast.success("Product added to the Cart")
  console.log(data)
}


console.log(data)


    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={data.image}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                 {data.title}
                </Text>
                <Text fontSize={'lg'}>
                 {data.description}
                </Text>
              </VStack>
             
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Category: {data.category}
                    </Text>{' '}
                   
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Gender: {data.gender}
                    </Text>{' '}
                   
                  </ListItem>
                  <ListItem>
                    <HStack>                 
                       <Text as={'span'} fontWeight={'bold'}>
                      Color: {data.color}
                
                    </Text>{' '}
                    <Box h={"5"} borderRadius={"10"} w={"5"} backgroundColor={data.color}></Box>
                    </HStack>
  
                   
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Price: ₹ {data.price}
                    </Text>{' '}
                  
                  </ListItem>
                
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={handleCartPage}
              >
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }