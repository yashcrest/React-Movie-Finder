import React from 'react'
import Movies from '../movie/MoviesList';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import MovieInfo from '../MovieInfo';

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
 