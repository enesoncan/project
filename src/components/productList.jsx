import React, { useContext } from 'react';
import Link from 'next/link';

import Card from './card';

import { SortContext } from '../contexts/sortContext';
import { FilterContext } from '../contexts/filterContext';

const ProductList = ({ productsData }) => {
  const { sortType } = useContext(SortContext);
  const { filterValue } = useContext(FilterContext);

  const sorted = productsData.sort((a, b) => {
    if (sortType === 'desc') {
      return b.products.price - a.products.price;
    } else if (sortType === 'asc') {
      return a.products.price - b.products.price;
    }
  });

  return (
    <>
      {Object.values(sorted)
        .filter((val) => {
          const { badges } = val.products;
          for (let i = 0; i < badges.length; i++) {
            if (badges[i] === filterValue) {
              return badges;
            } else if (!filterValue) {
              return badges;
            }
          }
        })
        .map((product) => {
          const { id, imageUrl, badges, name, price } = product.products;
          return (
            <Link href={`/detail?id=${id}`} key={id}>
              <a>
                <Card imageUrl={imageUrl} badges={badges} name={name} price={price} />
              </a>
            </Link>
          );
        })}
    </>
  );
};

export default ProductList;
