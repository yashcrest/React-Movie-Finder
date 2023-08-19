import React from 'react'
import { useState, useContext } from 'react';
import MoviesList from '../movies/MoviesList';
import SearchBar from '../movies/SearchBar';
import SearchResults from '../movies/SearchResults';
import MovieInfo from '../movies/MovieInfo';


const Index = () => {
    const [results, setResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [input, setInput] = useState('');

    //handle click on eachresult
    const handleMovieClick = (movieData) => {
        setSelectedMovie(movieData)
        setResults([]); //Clear the search results
    }
  return (
    <>
      <SearchBar setResults={setResults} input={input} setInput={setInput}/>
      <SearchResults results={results} onMovieClick={handleMovieClick} setInput={setInput}/>
      {selectedMovie && <MovieInfo movie={selectedMovie}/>}
    </>
  )
}

export default Index
 