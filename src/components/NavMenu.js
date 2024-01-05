import React, { useContext } from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  VStack
} from "@chakra-ui/react"

import { ShopContext } from '../contexts/shopContext'
import { Link } from 'react-router-dom'

export function NavMenu() {
  const { isMenuOpen, handleCloseMenu } = useContext(ShopContext)

  return (
    <>
      <Drawer isOpen={isMenuOpen} onClose={handleCloseMenu} placement="left" size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack p="2rem">
                <Link to="/">About Us</Link>
                <Link to="/">Learn More</Link>
                <Link to="/">Sustainability</Link>
              </VStack>
            </DrawerBody>
            <DrawerFooter textAlign="center">
              <Text w="100%">© Copyright vastashop.myshopify.com</Text>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}