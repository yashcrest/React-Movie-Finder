import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState('');

  const fetchData = async (value) => {
    const url = 'https://randomuser.me/api/?results=30'
    try {
      const res = await fetch(url);

      if(!res.ok) {
        throw new Error (`HTTP error! Status: ${res.status}`)
      }
      const {results} = await res.json()

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
        <input type="text" placeholder='Type to Search...' value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}

export default SearchBar
