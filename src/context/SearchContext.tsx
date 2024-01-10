import React, { ReactNode, createContext, useState } from 'react';

export const SearchContext = createContext<any>(null);

import { ComponentProps } from '../utils/Types';

export const SearchProvider: React.FC<ComponentProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const setSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};