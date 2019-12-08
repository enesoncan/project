import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { productsData } from '../../mock/products';

import ProductHeader from '../components/product-header';
import ProductFilter from '../components/product-filter';
import ProductCard from '../components/product-card';

import SortContextProvider from '../context/sort-context';
import FilterContextProvider from '../context/filter-context';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding: 0 90px;
`;

const LeftContent = styled.div`
  width: 20%;
  position: relative;
  display: inline-flex;
`;

const RightContent = styled.div`
  width: 80%;
  position: relative;
  display: block;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <SortContextProvider>
        <ProductHeader />
        <Wrapper>
          <FilterContextProvider>
            <LeftContent>
              <ProductFilter />
            </LeftContent>
            <RightContent>
              <ProductCard products={products} />
            </RightContent>
          </FilterContextProvider>
        </Wrapper>
      </SortContextProvider>
    </>
  );
};

export default Products;
