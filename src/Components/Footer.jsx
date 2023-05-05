import React from 'react';
import { Box, VStack, HStack, UnorderedList, ListItem, List, Input, Button } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      bg="#333333"
      color="#FFFFFF"
      px={{ base: 4, sm: 6, md: 8 }}
      py={{ base: 4, sm: 6, md: 8 }}
    >
      <VStack
        spacing={4}
        align='start'
        maxW={{ base: 'full', sm: '2xl', md: '6xl' }}
        mx='auto'
      >
        <HStack
          spacing={{ base: 4, md: 8 }}
          justify={{ base: 'space-around', md: 'space-between' }}
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          w='full'
        >
            <VStack>
        <img src="https://user-images.githubusercontent.com/112471219/236364309-5c7783e5-cca2-4152-9ff6-6eafb2c3474a.png" alt="" width="250px" />
        <Box>
          <h6>REAL DESIGNS BY REAL ARISTS</h6>
          <h6>FOR REAL PEOPLE</h6>
        </Box>
        </VStack>
          <List>
            <h5>PRODUCT</h5>
            <ListItem>Jacket</ListItem>
            <ListItem>Shirt</ListItem>
            <ListItem>T-shirt</ListItem>
            <ListItem>Dresses</ListItem>
            <ListItem>Outwear</ListItem>
            <ListItem>Bottoms</ListItem>
          </List>
          <List>
            <h5>PRODUCT</h5>
            <ListItem>Jacket</ListItem>
            <ListItem>Shirt</ListItem>
            <ListItem>T-shirt</ListItem>
            <ListItem>Dresses</ListItem>
            <ListItem>Outwear</ListItem>
            <ListItem>Bottoms</ListItem>
          </List>
          <List>
            <h5>PRODUCT</h5>
            <ListItem>Jacket</ListItem>
            <ListItem>Shirt</ListItem>
            <ListItem>T-shirt</ListItem>
            <ListItem>Dresses</ListItem>
            <ListItem>Outwear</ListItem>
            <ListItem>Bottoms</ListItem>
          </List>
        <VStack align='start'>
          <Input width={{ base: 'full', md: '250px' }} placeholder="EMAIL ADDRESS" />
          <Button colorScheme="blue" >Send</Button>
        </VStack>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Footer;
