import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ShopContextProvider } from './contexts/shopContext';
import { ChakraProvider } from "@chakra-ui/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
