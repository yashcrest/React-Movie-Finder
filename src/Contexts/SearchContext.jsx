import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

const SearchProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        input,
        setInput,
        results,
        setResults,
        hasSearched,
        setHasSearched,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
