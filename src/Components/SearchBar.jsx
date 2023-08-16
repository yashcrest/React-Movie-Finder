import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState('');

  const fetchData = async (value) => {
    const api_key = '829291bf';
    const url = `http://www.omdbapi.com/?t=${input}&apikey=${api_key}`
    try {
      const res = await fetch(url);

      if(!res.ok) {
        throw new Error (`HTTP error! Status: ${res.status}`)
      }
      const data = await res.json()
      console.log(data);

      const filteredResult = results.filter(user => {
        return value && (user.name.first.toLowerCase().includes(value) || user.name.last.toLowerCase().includes(value) )
      })

      console.log(filteredResult);
      setResults(filteredResult)


    } catch (err) {
       console.log('Error fetching data', err)
    }
    
  }


  const handleChange =  (value) => {
    setInput(value)
    fetchData(value)
  }


  return (
    <div>
        {/* value parameter helps determine what user has entered.  */}
        <a href="#" className='input-icon'><FaSearch color='grey' size={30}/></a>
        <input type="text" placeholder='Search a Movie...' value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}

export default SearchBar
