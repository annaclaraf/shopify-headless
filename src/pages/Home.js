import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from "@chakra-ui/react"
import { ShopContext } from '../contexts/shopContext'
import { Hero } from '../components/Hero';
import { ImageWithText } from '../components/ImageWithText';

export function Home() {
  const { handleFetchAllProducts, products } = useContext(ShopContext);
  
  useEffect(() => {
    handleFetchAllProducts();
    // eslint-disable-next-line
  }, []);
  
  if (!products) return <div>loading...</div>
  
  return (
    <Box>
      <Hero />
      <Grid templateColumns={['repeat(1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}>
        {
          products.map(product => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
                <Image src={product.images[0].src} />
                <Text fontWeight="bold">{product.title}</Text>
                <Text color="gray.500">${product.variants[0].price.amount}</Text>
              </Box>
            </Link>
          ))
        }
      </Grid>
      <ImageWithText
        button
        image="https://cdn.shopify.com/s/files/1/2248/5209/files/banner-dog-2.jpg"
        heading="Lorem Ipsum" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nisi pulvinar, malesuada risus vel, pellentesque nibh. Nunc aliquet dolor id arcu porta, vitae tristique lacus vestibulum. Aliquam dapibus lectus ac eros rhoncus, vel accumsan arcu pulvinar. Sed pharetra, magna sed pulvinar ullamcorper, elit neque finibus metus, nec vehicula leo risus sed mi. Nulla vitae lobortis turpis." 
      />
      <ImageWithText 
        reverse
        button
        image="https://cdn.shopify.com/s/files/1/2248/5209/files/banner-dog-1.jpg?v=1705016318"
        heading="Lorem Ipsum" 
        text="Morbi volutpat tellus non libero volutpat, sed auctor ligula rhoncus. Vestibulum odio diam, fringilla ac sem imperdiet, lobortis vulputate leo. Phasellus ac nunc ullamcorper, pellentesque mauris vitae, posuere nulla. Quisque ante orci, iaculis in eleifend posuere, fringilla ac lectus. Fusce efficitur arcu at augue placerat consequat." 
      />
    </Box>
  );
}
