import React from 'react'
import { useNavigate } from 'react-router-dom'

const EachResult = ({result,setInput}) => {
  const navigate = useNavigate();
    const clicked = async () => {
        navigate(`movie/${result.imdbID}`)
        setInput(''); //Clear the input field using React state management
    }
  return (
      <div className='each-result' onClick={clicked}>
        {result.Title} ({result.Year})
     </div>
  )
}

export default EachResult
