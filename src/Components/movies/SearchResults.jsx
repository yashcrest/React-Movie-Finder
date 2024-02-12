import React, { useState } from "react";
import EachResult from "./EachResult";
import { useSearch } from "../../Contexts/SearchContext";

const SearchResults = () => {
  const { results, input, hasSearched } = useSearch();
  return (
    <div className="results-list">
      {results.length > 0 ? (
        results.map((result, id) => <EachResult result={result} key={id} />)
      ) : hasSearched && !input ? (
        <p>Please enter a valid movie name!</p>
      ) : null}
    </div>
  );
};

export default SearchResults;
