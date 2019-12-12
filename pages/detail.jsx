import React from 'react';
import fetch from 'isomorphic-unfetch';

import ProductDetail from '../src/screens/productDetail';

const Detail = ({ productItem }) => {
  return <ProductDetail product={productItem} />;
};

Detail.getInitialProps = async ({ query }) => {
  const data = await fetch(`https://cimri-case.free.beeceptor.com/products`);
  const result = await data.json();

  let productId = query.id.match(/\d/g);
  productId = Number(productId.join(''));

  const productItem = result.filter((product) => product.products.id === productId)[0];

  return {
    productItem,
  };
};

export default Detail;
