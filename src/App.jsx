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
          <Route exact path='/' component={Index}>
            <SearchBar setResults={setResults}/>
            <SearchResults results={results}/>
          </Route>
        </div> 
      </>
    </Router>
  )
}
 
export default App
