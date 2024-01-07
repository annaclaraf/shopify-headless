import React from 'react';
import { Box, Link, Text, Image } from "@chakra-ui/react"

export function Hero() {
  const bannerDesktop = 'https://cdn.shopify.com/s/files/1/2248/5209/files/banner_desktop.png?v=1704584420';
  const bannerMob = 'https://cdn.shopify.com/s/files/1/2248/5209/files/banner_mob.png?v=1704584219';
  
  return (
    <Box w="100%" position="relative" overflow="hidden">
      <Box as="picture">
        <source media="(max-width: 767px)" srcSet={bannerMob} />
        <source media="(min-width: 768)" srcSet={bannerDesktop} />
        <Image w="100%"  h="100%" m="auto" objectFit="cover" objectPosition={['top', 'center']}  src={bannerDesktop} />
      </Box>
      
      <Box position="absolute" transform={"translate(-50%, -50%)"} left={{base: "50%", md: "75%"}} top={{base: "20%", md: "50%"}} w="500px" textAlign="center" p="30px">
        <Text fontSize="30px">
          Talk about your brand
        </Text>
        <Link 
          to="/"
          w={{ base: "7rem", md: "10rem" }}
          display="inline-block" 
          backgroundColor="#000" 
          borderRadius={8} 
          color="white" 
          p="10px" 
          fontWeight={600}
          fontSize={{ base: "14px", md: "16px" }}
          marginTop="20px" 
          textTransform="uppercase"
          _hover={{ opacity: '70%' }}
        >
          Shop All
        </Link>
      </Box>
    </Box>
  );
}
