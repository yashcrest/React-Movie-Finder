import React, { useState } from 'react'

const MoviesList = ({popularMovies}) => {
  return (
    <div>
      <h1 className='text-center m-5 title'>Trending Movies</h1>
      <div className="row d-flex g-5">
      {popularMovies.map((movie, id) => (
          <div className="col-lg-4 mh-25">
            <div className="card p-3 flex-fill">
              <h3 className='text-center'>{movie.title || movie.name}</h3>
              <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='img-fluid' />
              <p className='mt-4'><span className='bold'>Plot: </span>{movie.overview}</p>
            </div>
          </div>
      ))}
      </div>
    </div>
  )
}

export default MoviesList
