import React from 'react'

const MovieInfo = ({movie}) => {
  return (
    <div className='movie-info text-center'>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img className='rounded' src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p><span className='lead'>Cast: </span>{movie.Actors}</p>
      <p>Rating: {movie.imdbRating}</p>
    </div>
  )
}

export default MovieInfo
