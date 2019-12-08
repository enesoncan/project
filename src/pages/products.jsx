import React, { useState, useEffect } from 'react';

import { productsData } from '../../mock/products';

import ProductHeader from '../components/product-header';
import ProductCard from '../components/product-card';

import SortContextProvider from '../context/sort-context';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <SortContextProvider>
        <ProductHeader />
        <ProductCard products={products} />
      </SortContextProvider>
    </>
  );
};

export default Products;
