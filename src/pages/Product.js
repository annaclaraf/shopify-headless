import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../contexts/shopContext';

export function Product() {
  const { handle } = useParams();
  const { handleFetchProductByHandle, handleFetchAllProducts, product } = useContext(ShopContext);

  useEffect(() => {
    handleFetchProductByHandle(handle);
    // eslint-disable-next-line
  }, [handle])

  useEffect(() => {
    handleFetchAllProducts();
    // eslint-disable-next-line
  }, [])

  if (!product?.title) return <div>loading...</div>

  return (
    <div>
      {product.title}
    </div>
  );
}
