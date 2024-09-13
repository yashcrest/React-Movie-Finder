import EachResult from "./EachResult";
import { useSearchContext } from "../../contexts/SearchContext";
import { OnMovieClick } from "../../types/Index";

type SearchResultsProps = {
  onMovieClick: OnMovieClick;
};

const SearchResults = ({ onMovieClick }: SearchResultsProps) => {
  const { movies, errorMessage, hasSearched } = useSearchContext();
  return (
    <div className="results-list">
      {movies.length > 0 ? (
        movies.map((movie, id) => (
          <EachResult onMovieClick={onMovieClick} movie={movie} key={id} />
        ))
      ) : hasSearched && errorMessage ? (
        <p className="err-msg">{errorMessage}</p> // to display error message if movie name is invalid
      ) : null}
    </div>
  );
};

export default SearchResults;
