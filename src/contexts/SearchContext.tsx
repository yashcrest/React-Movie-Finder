import { createContext, useContext, useState } from "react";

const SearchContext = createContext("");

export const SearchProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <SearchContext.Provider
      value={{
        input,
        setInput,
        results,
        setResults,
        hasSearched,
        setHasSearched,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
