import React from "react";
import EachResult from "./EachResult";

const SearchResults = ({ results, onMovieClick, setInput }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <EachResult
            result={result}
            key={id}
            onMovieClick={onMovieClick}
            setInput={setInput}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;
