import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState('');


  //fetching data

  const fetchData = async (value) => {
    const api_key = '829291bf';
    const url = `http://www.omdbapi.com/?apikey=${api_key}&s=${value}`
    try {
      const res = await fetch(url);

      if(!res.ok) {
        throw new Error (`HTTP error! Status: ${res.status}`)
      }

      const movieData = await res.json()
      if(movieData.Error){
        console.log(movieData.Error);
        setResults([]);
      } else {
        console.log(movieData.Search);
        //pushing it on the results array in app.jsx
        setResults(movieData.Search);
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
    <div>
        <a href="#" className='input-icon'><FaSearch color='grey' size={30}/></a>
        <input type="text" placeholder='Search a Movie...' value={input}  onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}

export default SearchBar
