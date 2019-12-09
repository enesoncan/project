import React, { useContext } from 'react';
import styled from 'styled-components';

import { FilterContext } from '../contexts/filterContext';

const Wrapper = styled.div`
  width: 100%;
  display: block;
  height: fit-content;
`;

const FilterTop = styled.div`
    width: 100%;
    padding: 10px 0 15px;
    height: fit-content;
    position relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;
`;

const FilterText = styled.span`
  color: #33333a;
  font-size: 12px;
  font-family: helvetica;
`;

const ResetButton = styled.button`
  border: 0;
  color: #ff6008;
  font-size: 11px;
  background: none;
  outline: none;
`;

const FilterBottom = styled.div`
    width: 100%;
    padding: 10px 0 15px;
    height: fit-content;
    position relative;
    display: block;
`;

const Label = styled.label`
  display: flex;
  margin: 10px 0;
  font-size: 12px;
  font-family: helvetica;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 5px;
`;

const Filter = () => {
  const { changeFilterValue, filterValue, resetValue } = useContext(FilterContext);
  return (
    <Wrapper>
      <FilterTop>
        <FilterText>FILTERS</FilterText>
        <ResetButton onClick={resetValue}>RESET</ResetButton>
      </FilterTop>
      <FilterBottom>
        <Label>
          <Input type="radio" value="new" onChange={changeFilterValue} checked={filterValue === 'new'} />
          New
        </Label>
        <Label>
          <Input type="radio" value="discount" onChange={changeFilterValue} checked={filterValue === 'discount'} />
          Discount
        </Label>
      </FilterBottom>
    </Wrapper>
  );
};

export default Filter;
