import React, { createContext, useState, useEffect } from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API_KEY
});

export const ShopContext = createContext();

export function ShopContextProvider({children}) {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState({});
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.checkout_id) {
      handleFetchCheckout(localStorage.checkout_id);
    } else {
      handleCreateCheckout();
    }
  }, [])

  async function handleCreateCheckout() {
    const newCheckout = await client.checkout.create();
    localStorage.setItem("checkout_id", newCheckout.id);
    setCheckout(newCheckout);    
  }

  async function handleFetchCheckout(checkoutId) {
    const newCheckout = await client.checkout.fetch(checkoutId);
    try {
      setCheckout(newCheckout);
    } catch (error) {
      console.log(error)
    }
  }

  async function handleAddItemToCheckout(variantId, quantity) {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    const newCheckout = await client.checkout.addLineItems(
      checkout.id,
      lineItemsToAdd
    );

    setCheckout(newCheckout);
    handleOpenCart();
  }

  async function handleRemoveLineItem(lineItemIdsToRemove) {
    const checkoutId = checkout.id;

    const newCheckout = await client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove);
    setCheckout(newCheckout);
  }

  async function handleFetchAllProducts() {
    const products = await client.product.fetchAll();
    setProducts(products);
  }

  async function handleFetchProductByHandle(handle) {
    const product = await client.product.fetchByHandle(handle);
    try {
      setProduct(product);
    } catch (error) {
      console.log(error)
    }
  }

  function handleCloseCart() {
    setCartOpen(false);
  }

  function handleOpenCart() {
    setCartOpen(true);
  }

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  function handleOpenMenu() {
    setMenuOpen(true);
  }

  return (
    <ShopContext.Provider
      value={{
        product,
        products,
        checkout,
        isCartOpen,
        isMenuOpen,
        handleFetchAllProducts,
        handleFetchProductByHandle,
        handleCloseCart,
        handleOpenCart,
        handleCloseMenu,
        handleOpenMenu,
        handleAddItemToCheckout,
        handleRemoveLineItem
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
