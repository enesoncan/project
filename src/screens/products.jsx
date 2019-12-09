import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { mockData } from '../../mock/products';

import Header from '../components/header';
import Filter from '../components/filter';
import ProductList from '../components/productList';

import SortContextProvider from '../contexts/sortContext';
import FilterContextProvider from '../contexts/filterContext';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding: 0 90px;
`;

const LeftColumn = styled.div`
  width: 20%;
  position: relative;
  display: inline-flex;
`;

const RightColumn = styled.div`
  width: 80%;
  position: relative;
  display: block;
`;

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(mockData);
  }, []);

  return (
    <>
      <SortContextProvider>
        <Header />
        <Wrapper>
          <FilterContextProvider>
            <LeftColumn>
              <Filter />
            </LeftColumn>
            <RightColumn>
              <ProductList productsData={productsData} />
            </RightColumn>
          </FilterContextProvider>
        </Wrapper>
      </SortContextProvider>
    </>
  );
};

export default Products;
