import React, { useEffect, useContext } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Box, Grid, Image, Text, Button, Heading, Flex, Center } from "@chakra-ui/react"
import { ShopContext } from '../contexts/shopContext';

export function Product() {
  const { handle } = useParams();
  const { pathname } = useLocation();
  const { handleFetchProductByHandle, handleFetchAllProducts, handleAddItemToCheckout, products, product } = useContext(ShopContext);

  useEffect(() => {
    handleFetchProductByHandle(handle);
    // eslint-disable-next-line
  }, [handle])

  useEffect(() => {
    handleFetchAllProducts();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500)
  }, [pathname]);

  if (!product?.title) return <div>loading...</div>

  return (
    <>
      <Box p="2rem">
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} m="auto">
          <Flex justifyContent="center" alignItems="center">
            <Image src={product.images[0].src} />
          </Flex>
          <Box px="2rem" display="flex" flexDir="column" alignItems="center" justifyContent="center">
            <Heading pb="2rem">{product.title}</Heading>
            <Text fontWeight="bold" pb="2rem">${product.variants[0].price.amount}</Text>
            <Text color="gray.500" pb="2rem">{product.description}</Text>
            <Button w="10rem" backgroundColor="#FF38BD" color="white" _hover={{ opacity: '70%' }}
              onClick={() => handleAddItemToCheckout(product.variants[0].id, 1)}>
              Add To Cart
          </Button>
          </Box>
        </Grid>
      </Box>
      <Center fontWeight="bold" pb="2rem">You Might Also Like</Center>
      <Grid templateColumns={['repeat(1fr)', 'repeat(3, 1fr)']} id="products">
        {products.map(product => (
          <Link to={`/products/${product.handle}`} key={product.id} >
            <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
              <Image
                src={product.images[0].src}
              />
              <Text fontWeight="bold" position="absolute" bottom="15%" w="100%">{product.title}</Text>
              <Text position="absolute" bottom="5%" w="100%">${product.variants[0].price.amount}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </>
  );
}
