import React, { useState } from 'react'
import SearchBar from './Components/SearchBar'
import SearchResults from './Components/SearchResults';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MovieInfo from './Components/MovieInfo';

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [input, setInput] = useState('');

  //handle click on eachresult
  const handleMovieClick = (movieData) => {
    setSelectedMovie(movieData)
    setResults([]); //Clear the search results
  }
  return (
    <Router>
      <>
        <NavBar />
        <div className="container">
            <SearchBar setResults={setResults} input={input} setInput={setInput}/>
            <SearchResults results={results} onMovieClick={handleMovieClick} setInput={setInput}/>
            {selectedMovie && <MovieInfo movie={selectedMovie}/>}
        </div> 
      </>
    </Router>
  )
}
 
export default App
