import React from 'react'
import {FaStar} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MovieInfo = ({movie}) => {
  return (
    <>
    <Link className='link' to='/'>Go back</Link>
      <div className='movie-info  mx-auto'>
        <h2>{movie.Title} ({movie.Year})</h2>
        <img className='rounded poster' src={movie.Poster} alt={movie.Title} />
        <p> <span className='plot lead'>Plot: </span>{movie.Plot}</p>
        <p><span className='cast lead'>Cast: </span>{movie.Actors}</p>
        <p><span className='cast lead'>Director: </span>{movie.Director}</p>
        <p> <span className='plot lead'>Genre: </span>{movie.Genre}</p>
        <p><span className='rating lead'>IMDB Rating:</span> {movie.imdbRating} <FaStar  className='mb-1'/> </p>
      </div>
    </>
  )
}

export default MovieInfo
  