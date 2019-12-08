import React, { useState, useEffect } from 'react';

import { productsData } from '../../mock/products';

import ProductCard from '../components/product-card';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return <ProductCard products={products} />;
};

export default Products;
