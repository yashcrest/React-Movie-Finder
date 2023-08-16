import React, { useState } from 'react'
import SearchBar from './Components/SearchBar'
import SearchResults from './Components/SearchResults';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  const [results, setResults] = useState([]);
  return (
    <Router>
      <>
        <NavBar />
        <div className="container">
            <SearchBar setResults={setResults}/>
            <SearchResults results={results}/>
        </div> 
      </>
    </Router>
  )
}
 
export default App
