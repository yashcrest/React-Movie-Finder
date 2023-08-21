import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar bg-warning mb-5'> 
        <Link to='/' className="navbar-brand mb-0 h1 mx-auto text-dark">
            Movie Finder
        </Link>
    </nav>
  )
} 
export default NavBar
