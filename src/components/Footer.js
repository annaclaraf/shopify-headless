import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Flex, Box, Text, Image, VStack } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box backgroundColor="#dcdcdc">
      <Flex color="white" fontWeight='bold' wrap={'wrap'} alignItems={'center'} justifyContent={'space-around'} w={'100%'} padding={'25px'}>
        <Image src="https://cdn.shopify.com/s/files/1/2248/5209/files/logo_1.png?v=1703954629" w={270} />
        <VStack padding={'20px'} textAlign={'center'}>
          <Link to="/">FISICO - Suplemento Legal</Link>
          <Link to="/">ABS de Alta-Grau 20.00% Off Auto renew</Link>
          <Link to="/">Truelove Veículo Bloqueio</Link>
        </VStack>
        <VStack padding={'20px'} textAlign={'center'}>
          <Link to="/">About Us</Link>
          <Link to="/">Learn More</Link>
          <Link to="/">Sustainability</Link>
        </VStack>
      </Flex>
      <Box>
        <Text textAlign="center" color="white" w="100%" borderTop="1px solid white" p="1rem">
          © Copyright vastashop.myshopify.com
        </Text>
      </Box>
    </Box>
  );
}
