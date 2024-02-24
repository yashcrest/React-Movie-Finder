import React, { useState } from "react";
import EachResult from "./EachResult";
import { useSearch } from "../../Contexts/SearchContext";

const SearchResults = () => {
  const { results, errorMessage, hasSearched } = useSearch();
  return (
    <div className="results-list">
      {results.length > 0 ? (
        results.map((result, id) => <EachResult result={result} key={id} />)
      ) : hasSearched && errorMessage ? (
        <p className="err-msg">{errorMessage}</p> // to display error message if movie name is invalid
      ) : null}
    </div>
  );
};

export default SearchResults;
