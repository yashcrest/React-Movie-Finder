import React from 'react'
import EachResult from './EachResult'

const SearchResults = ({results}) => {
  return (
    <div className='results-list'>
        {results.map((result, id) => {
            return <EachResult result={result} key={id}/>
        })}
    </div>
  )
}

export default SearchResults
