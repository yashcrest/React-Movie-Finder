import React from 'react'
import EachResult from './EachResult'

const SearchResults = ({results, setSelectedMovie}) => {
  return (
    <div className='results-list'>
        {results.map((result, id) => {
            return <EachResult result={result} key={id} setSelectedMovie={setSelectedMovie}/>
        })}
    </div>
  )
}

export default SearchResults
