import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const DetailWrapper = styled.div`
  display: block;
  width: fit-content;
`;

const Button = styled.button`
  padding: 5px;
  outline: none;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #333;
`;
const Title = styled.h1`
  display: flex;
  font-size: 15px;
  font-family: helvetica;
`;

const Content = styled.p`
  display: flex;
  font-size: 13px;
  font-family: helvetica;
`;

const BadgeList = styled.ul`
  display: block;
  font-size: 15px;
  font-family: helvetica;
`;
const ProductDetail = ({ product }) => {
  const { name, price, rate, badges, content } = product.products;
  return (
    <DetailWrapper>
      <Link href="/">
        <Button>Products Page</Button>
      </Link>
      <Title>{name}</Title>
      <Content>{price}</Content>
      <Content>{rate}</Content>
      <BadgeList>
        {badges.map((badge, index) => {
          return <li key={index}>{badge}</li>;
        })}
      </BadgeList>
      <Content>{content}</Content>
    </DetailWrapper>
  );
};

export default ProductDetail;
