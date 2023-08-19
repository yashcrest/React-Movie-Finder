import React, { useState } from 'react' 
import Index from './Components/layout/Index';
import NavBar from './Components/layout/NavBar';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <>
        <NavBar />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Index />} />
            </Routes>
          </div> 
      </>
    </Router> 
  )
}
 
export default App
