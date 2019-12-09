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
  margin: 0 auto;
  padding: 0 90px;
  max-width: 920px;
  position: relative;
`;

const LeftColumn = styled.div`
  width: 25%;
  position: relative;
  display: inline-flex;
`;

const RightColumn = styled.div`
  width: 75%;
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
