import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from "@chakra-ui/react"
import { ShopContext } from '../contexts/shopContext'

export function Home() {
  const { handleFetchAllProducts, products } = useContext(ShopContext);
  
  useEffect(() => {
    handleFetchAllProducts();
    // eslint-disable-next-line
  }, []);
  
  if (!products) return <div>loading...</div>
  
  return (
    <Box>
      <Grid templateColumns={['repeat(1fr)', 'repeat(3, 1fr)']}>
        {
          products.map(product => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
                <Image src={product.images[0].src} />
                <Text>{product.title}</Text>
                <Text>${product.variants[0].price.amount}</Text>
              </Box>
            </Link>
          ))
        }
      </Grid>
    </Box>
  );
}
