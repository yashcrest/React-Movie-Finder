import React from 'react'
import SearchBar from '../movies/SearchBar'

const NavBar = ({input, setInput, setResults}) => {
  return (
    <nav className='navbar bg-warning mb-5'> 
        <span className="navbar-brand mb-0 h1 mx-auto text-dark">
            Movie Finder
        </span>
    </nav>
  )
} 
export default NavBar
