import React from 'react';
import styled from 'styled-components';

const Products = () => {
  const Title = styled.h1`
    color: ${(props) => (props.red ? 'red' : 'blue')};
    font-size: 16px;
    margin: 10px;
    padding: 5px;
    font-family: verdana;
  `;
  return (
    <div>
      <Title>Hello World</Title>
      <Title red>Hello World</Title>
    </div>
  );
};

export default Products;
