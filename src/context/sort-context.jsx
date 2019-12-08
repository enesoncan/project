import React, { createContext, useState } from 'react';

export const SortContext = createContext();

const SortContextProvider = ({ children }) => {
  const [sortType, setSortType] = useState('');

  const changeSortValue = (e) => {
    const value = e.target.value;
    setSortType(value);
  };

  return <SortContext.Provider value={{ sortType, changeSortValue }}>{children}</SortContext.Provider>;
};

export default SortContextProvider;
