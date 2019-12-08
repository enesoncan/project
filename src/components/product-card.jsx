import React, { useContext } from 'react';
import styled from 'styled-components';

import { SortContext } from '../context/sort-context';

const Card = styled.div`
  position: relative;
  display: inline-block;
  width: 160px;
  margin: 0 0 30px 40px;
  font-family: helvetica-light;
`;

const PictureWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  z-index: -1;
`;

const Badge = styled.span`
  padding: 5px;
  color: #ffffff;
  font-size: 8px;
  text-transform: uppercase;
  display: inline-flex;
  background: #ff6008;
  margin: 10px 0 0 10px;
`;

const Title = styled.p`
  margin: 10px 0 5px;
  font-size: 16px;
  color: #33333a;
`;

const Price = styled.p`
  margin: 0;
  font-size: 14px;
  color: #33333a;
`;

const ProductCard = ({ products }) => {
  const { sortType } = useContext(SortContext);

  const sorted = products.sort((a, b) => {
    if (sortType === 'desc') {
      return b.products.price - a.products.price;
    } else if (sortType === 'asc') {
      return a.products.price - b.products.price;
    }
  });

  return (
    <>
      {Object.values(sorted).map((product) => {
        const { id, imageUrl, badges, name, price } = product.products;
        return (
          <Card key={id}>
            <PictureWrapper>
              <Picture src={imageUrl} />
              {badges.map((badge, index) => {
                return <Badge key={index}>{badge}</Badge>;
              })}
            </PictureWrapper>
            <Title>{name}</Title>
            <Price>{`$${price}`}</Price>
          </Card>
        );
      })}
    </>
  );
};

export default ProductCard;
