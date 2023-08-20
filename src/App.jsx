import React, { useState } from 'react' 
import Index from './Components/layout/Index';
import NavBar from './Components/layout/NavBar';
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
              <Route path='/' element={<Index results={results} setResults={setResults}/>} />
              <Route path='/movie/:id' element={<MovieInfo />} />
            </Routes>
          </div> 
      </>
    </Router> 
  )
}
 
export default App
