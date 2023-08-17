import React, { useState } from 'react'
import SearchBar from './Components/SearchBar'
import SearchResults from './Components/SearchResults';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MovieInfo from './Components/MovieInfo';

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <Router>
      <>
        <NavBar />
        <div className="container">
            <SearchBar setResults={setResults}/>
            <SearchResults results={results} setSelectedMovie={setSelectedMovie}/>
            {selectedMovie && <MovieInfo movie={selectedMovie}/>}
        </div> 
      </>
    </Router>
  )
}
 
export default App
