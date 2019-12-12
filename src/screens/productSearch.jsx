import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from '../components/header';
import Filter from '../components/filter';
import ProductList from '../components/productList';

import SortContextProvider from '../contexts/sortContext';
import FilterContextProvider from '../contexts/filterContext';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}

a{
  position: relative;
  display: inline-block;
  width: 28%;
  @media (max-width: 900px) {
    width: 40%;
  }
  margin: 0 0 30px 30px;
  font-family: helvetica-light;
  text-decoration: none;
}
`;

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

const ProductSearch = ({ productsData }) => {
  return (
    <>
      <GlobalStyle />
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

export default ProductSearch;
