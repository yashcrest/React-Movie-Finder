import EachResult from "./EachResult";
import { useSearchContext } from "../../contexts/SearchContext";

const SearchResults = ({ onMovieClick }) => {
  const { results, errorMessage, hasSearched } = useSearchContext();
  return (
    <div className="results-list">
      {results.length > 0 ? (
        results.map((result, id) => (
          <EachResult onMovieClick={onMovieClick} result={result} key={id} />
        ))
      ) : hasSearched && errorMessage ? (
        <p className="err-msg">{errorMessage}</p> // to display error message if movie name is invalid
      ) : null}
    </div>
  );
};

export default SearchResults;
