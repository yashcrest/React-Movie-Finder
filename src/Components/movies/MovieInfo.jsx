import React from 'react'

const MovieInfo = ({movie}) => {
  return (
    <div className='movie-info my-5 mx-auto'>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img className='rounded poster' src={movie.Poster} alt={movie.Title} />
      <p> <span className='plot lead'>Plot: </span>{movie.Plot}</p>
      <p><span className='cast lead'>Cast: </span>{movie.Actors}</p>
      <p><span className='cast lead'>Director: </span>{movie.Director}</p>
      <p> <span className='plot lead'>Genre: </span>{movie.Genre}</p>
      <p><span className='rating lead'>IMDB Rating:</span> {movie.imdbRating} <span>⭐️</span></p>
    </div>
  )
}

export default MovieInfo
