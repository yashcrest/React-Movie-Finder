import React, { useState } from "react";
import EachResult from "./EachResult";
import { useSearch } from "../../Contexts/SearchContext";

const SearchResults = () => {
  const { results } = useSearch();
  return (
    <div className="results-list">
      {results.map((result, id) => (
        <EachResult result={result} key={id} />
      ))}
    </div>
  );
};

export default SearchResults;
