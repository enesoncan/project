import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [filterValue, setFilterValue] = useState();

  const changeFilterValue = (e) => {
    const value = e.target.value;
    setFilterValue(value);
  };

  const resetValue = () => {
    setFilterValue(null);
  };

  return (
    <FilterContext.Provider value={{ filterValue, changeFilterValue, resetValue }}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
