import React from 'react'

const EachResult = ({result, onMovieClick}) => {
    const clicked = async () => {
        const api_key = '829291bf'
        const url = `http://www.omdbapi.com/?apikey=${api_key}&i=${result.imdbID}`
        const response  = await fetch(url);
        const movieData = await response.json();

        console.log(movieData);
        //passing the movie info to app.jsx which will pass it to Movieinfo component
        onMovieClick(movieData);

        setInput(''); //Clear the input field using React state management
    }
  return (
      <div className='each-result' onClick={(e) => clicked(e.target)}>
        {result.Title} ({result.Year})
     </div>
  )
}

export default EachResult
