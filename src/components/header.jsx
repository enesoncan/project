import React, { useContext } from 'react';
import styled from 'styled-components';

import { SortContext } from '../contexts/sortContext';

const HeaderBox = styled.div`
  width: 100%;
  display: block;
  position: relative;
  background: #ffffff;
  margin-bottom: 25px;
  font-family: helvetica-light;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
`;

const Wrapper = styled.div`
    display flex;
    height: 40px;
    padding: 0 90px;
    margin: 0 auto;
    max-width: 920px;
    align-items: center;
    justify-content: space-between;
  `;
const Category = styled.h1`
  color: #030303;
  font-size: 11px;
  font-weight: 500;
`;

const Sort = styled.div`
  align-items: center;
  display: flex;
`;

const SortTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
`;

const Select = styled.select`
  width: 100px;
  height: 25px;
  background: white;
  color: #515356;
  font-size: 9px;
  border: 1px solid #dedede;
  margin-left: 15px;
  outline: none;
  border-radius: 0;

  option {
    display: flex;
    font-size: 12px;
    white-space: pre;
    min-height: 20px;
    font-family: helveetica;
    text-transform: uppercase;
  }
`;

const Header = () => {
  const { changeSortValue } = useContext(SortContext);
  return (
    <HeaderBox>
      <Wrapper>
        <Category>Women</Category>
        <Sort>
          <SortTitle>Sort By</SortTitle>
          <Select onChange={changeSortValue}>
            <option value="" hidden>
              PRICE
            </option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </Select>
        </Sort>
      </Wrapper>
    </HeaderBox>
  );
};

export default Header;
