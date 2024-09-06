import { createContext, useContext, useState } from "react";

type MovieResult = {
  adult: boolean;
  id: number;
  original_title: string;
  title: string;
  video: boolean;
  release_date: string;
  vote_average: number;
  vote_count: number;
};

type TSearchContext = {
  input: string;
  setInput: (value: string) => void;
  movies: MovieResult[];
  setMovies: (movies: MovieResult[]) => void;
  hasSearched: boolean;
  setHasSearched: (value: boolean) => void;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
};

const SearchContext = createContext<TSearchContext | undefined>(undefined);

type TSearchProvider = {
  children: React.ReactNode;
};

export const SearchProvider = ({ children }: TSearchProvider) => {
  const [input, setInput] = useState<string>("");
  const [movies, setMovies] = useState<MovieResult[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{
        input,
        setInput,
        movies,
        setMovies,
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

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error("useSearchContext must me used within a SearchProvider"); // i have added an extra layer of check just to make sure SearchContext is used with in the <SearchProvider>
  }
  return context;
};
