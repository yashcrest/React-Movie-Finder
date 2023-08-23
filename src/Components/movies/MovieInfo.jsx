import React, { useEffect, useState } from 'react'
import {FaStar} from 'react-icons/fa'
import {BiArrowBack} from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'

const MovieInfo = ({setResults}) => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const tmdb_api_key = import.meta.env.VITE_TMDB_API_KEY;
      const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?&api_key=${tmdb_api_key}&language=en-US`;
      const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?&api_key=${tmdb_api_key}`;
      const imageUrl = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${tmdb_api_key}`;

      const [detailsResponse , creditsResponse, imageResponse] = await Promise.all([
        fetch(detailsUrl),
        fetch(creditsUrl),
        fetch(imageUrl),
      ]);

      const movieData = await detailsResponse.json()
      const creditData = await creditsResponse.json()
      const imageData = await imageResponse.json() //still have to figure out how to handle and display this response

      const director = creditData.crew.find(person => person.job === 'Director');
      const cast = creditData.cast.slice(0,5).map(person => person.name).join(', ' ) //getting first 5 casts

      setMovie({
        ...movieData,
        director: director ? director.name : 'N/A',
        cast: cast,
      })
    };

    fetchMovieDetails();
  },[id]);

  if(!movie) return <div>Loading...</div>
  return (
    <>
    <Link className='link h2 text-dark' to='/'><BiArrowBack /></Link>
      <div className='movie-info  mx-auto'>
        <h2>{movie.original_title} ({movie.release_date})</h2>
        <img className='rounded poster' src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={movie.original_title} loading='lazy'/>
        <p> <span className='plot lead'>Plot: </span>{movie.overview}</p>
        <p><span className='cast lead'>Cast: </span>{movie.cast}</p>
        <p><span className='cast lead'>Director: </span>{movie.director}</p>
        <p> <span className='plot lead'>Genre: </span>{movie.genres.slice(0,3).map(genre => genre.name).join(', ')}</p>
        <p><span className='rating lead'>IMDB Rating:</span> {movie.imdbRating} <FaStar  className='mb-1'/> </p>
      </div>
    </>
  )
}

export default MovieInfo
  