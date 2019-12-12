import React from 'react';
import fetch from 'isomorphic-unfetch';

import ProductSearch from '../src/screens/productSearch';

const Index = ({ products }) => {
  return <ProductSearch productsData={products} />;
};

Index.getInitialProps = async () => {
  const data = await fetch(`https://cimri-case.free.beeceptor.com/products`);
  const result = await data.json();

  return {
    products: result,
  };
};
export default Index;
