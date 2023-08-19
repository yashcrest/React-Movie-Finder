import React from 'react'

const MovieInfo = ({movie}) => {
  return (
    <div className='movie-info my-5 mx-auto'>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img className='rounded poster' src={movie.Poster} alt={movie.Title} />
      <p> <span className='synopsis lead'>Synopsis: </span>{movie.Plot}</p>
      <p><span className='cast lead'>Cast: </span>{movie.Actors}</p>
      <p><span className='rating lead'>Rating:</span> {movie.imdbRating}</p>
    </div>
  )
}

export default MovieInfo
