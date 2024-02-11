import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

const SearchProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  return (
    <SearchContext.Provider value={{ input, setInput, results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
