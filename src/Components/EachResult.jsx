import React from 'react'

const EachResult = ({result}) => {
    const clicked = (value) => {
        console.log(value);
    }

  return (
      <div className='each-result' onClick={(e) => clicked(e.target)}>
        {result.Title} ({result.Year})
     </div>
  )
}

export default EachResult
