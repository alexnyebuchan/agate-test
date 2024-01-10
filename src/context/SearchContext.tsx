import React, { createContext, useState } from 'react';

export const SearchContext = createContext<any>(null);

export const SearchProvider: React.FC = ({ children }) => {
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