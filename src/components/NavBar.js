import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Badge, Box, Icon, Image } from "@chakra-ui/react"
import { MdShoppingBasket, MdDehaze } from "react-icons/md";
import { ShopContext } from '../contexts/shopContext'

export function NavBar() {
  const { handleOpenCart, handleOpenMenu, checkout } = useContext(ShopContext)

  return (
    <Box borderBottom="0.25pt white solid" backgroundColor="#FFFFFF" display="flex" flexDir="row" p="2rem" justifyContent="space-between" alignItems="center">
      <Icon fill="#000" cursor="pointer" onClick={() => handleOpenMenu()} as={MdDehaze} w={30} h={30}></Icon>
      <Link to="/"><Image src="https://cdn.shopify.com/s/files/1/2248/5209/files/logo_1.png?v=1703954629" w={150} /></Link>
      <Box onClick={() => handleOpenCart()} cursor="pointer">
        <Icon fill="#000" as={MdShoppingBasket} w={30} h={30}></Icon>
        <Badge position="absolute" backgroundColor="#000" borderRadius="50%" color="#FFF">{checkout?.lineItems?.length}</Badge>
      </Box>
    </Box>
  );
}