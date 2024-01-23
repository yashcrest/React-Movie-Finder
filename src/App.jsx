import React, { useState } from 'react' 
import {Footer, NavBar, MovieDashBoard} from './Components/layout'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import MovieInfo from './Components/movies/MovieInfo';

const App = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  return (
    <Router>
      <>
        <NavBar input={input} setInput={setInput} setResults={setResults}/>
          <div className="container">
            <Routes>
              <Route path='/' element={<MovieDashBoard results={results} setResults={setResults}/>} />
              <Route path='/movie/:id' element={<MovieInfo />} />
            </Routes>
          </div> 
          <Footer />
      </>
    </Router> 
  )
}
 
export default App
