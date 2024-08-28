import { createContext, useContext, useState } from "react";

const SearchContext = createContext("");

type TSearchProvider = {
  children: React.ReactNode;
};

export const SearchProvider = ({ children }: TSearchProvider) => {
  const [input, setInput] = useState<String>("");
  const [results, setResults] = useState<String[]>([]);
  const [hasSearched, setHasSearched] = useState<Boolean>(false);
  const [errorMessage, setErrorMessage] = useState<String>("");

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
