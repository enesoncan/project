import React from 'react';
import fetch from 'isomorphic-unfetch';

import Products from '../src/screens/products';

const Index = (props) => {
  return <Products productsData={props} />;
};

Index.getInitialProps = async () => {
  const data = await fetch('https://cimri-case.free.beeceptor.com/products');
  const result = await data.json();

  return {
    products: result,
  };
};
export default Index;
