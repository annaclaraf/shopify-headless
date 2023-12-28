import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../contexts/shopContext'

export function Home() {
  const { handleFetchAllProducts, products } = useContext(ShopContext);
  
  useEffect(() => {
    handleFetchAllProducts();
    // eslint-disable-next-line
  }, []);
  
  if (!products) return <div>loading...</div>
  
  return (
    <div>
      {
        products.map(product => (
          <div key={product.id}>
            <h3>{product.title}</h3>
          </div>
        ))
      }
    </div>
  );
}
