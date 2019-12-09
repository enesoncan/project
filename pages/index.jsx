import React from 'react';
import styled from 'styled-components';

import Products from '../src/screens/products';

const Body = styled.body`
  margin: 0;
`;

const Index = () => {
  return (
    <Body>
      <Products />
    </Body>
  );
};

export default Index;
