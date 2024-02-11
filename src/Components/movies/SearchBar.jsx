import React from 'react'
import {FaSearch} from 'react-icons/fa'

const SearchBar = ({setResults,input,setInput}) => {

  //fetching data
  const fetchData = async (value) => {
    const api_key = import.meta.env.VITE_TMDB_API_KEY
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${value}&language=en-US`
    try {
      const res = await fetch(url);

      if(!res.ok) {
        throw new Error (`HTTP error! Status: ${res.status}`)
      }

      const movieData = await res.json()
      console.log(movieData);
      if(movieData.Error){
        console.log(movieData.Error);
        setResults([]);
      } else {
        //pushing it on the results array in app.jsx
        setResults(movieData.results);
      }
    } catch (err) {
       console.log('Error fetching data', err)
    }
  }


  const handleChange =  (value) => {
    setInput(value)
    if(value.trim()){
      fetchData(value)
    } else {
      setResults([]);
    }
  }


  return (
    <div className='search-bar'>
        <a href="#" className='input-icon'><FaSearch color='grey' size={30}/></a>
        <input className='input' type="text" placeholder='Search a Movie...' value={input}  onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}

export default SearchBar
