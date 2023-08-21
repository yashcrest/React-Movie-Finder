import React, { useEffect } from 'react'
import axios from 'axios'
import { useState, useContext } from 'react';
import MoviesList from '../movies/MoviesList';
import SearchBar from '../movies/SearchBar';
import SearchResults from '../movies/SearchResults';
import MovieInfo from '../movies/MovieInfo';


const Index = () => {
    const [results, setResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [input, setInput] = useState('');

    const [popularMovies, setPopularMovies] = useState([])

    // fetch popular movies
    const fetchMovie = async () => {
        const tmdb_api_key = import.meta.env.VITE_TMDB_API_KEY
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdb_api_key}&language=en-US`
        try {
            const res = await axios.get(url)
            if(res.Error) {
                console.log(res.Error)
                setPopularMovies([])
            } else {
                const {results } = res.data
                console.log(results)
                setPopularMovies(results)
            }
        } catch (err) {
        console.log("Error fetching trending movies:", err);
        }
    }

    useEffect(() => {
        fetchMovie();
    },[])

    //handle click on eachresult
    const handleMovieClick = (movieData) => {
        setSelectedMovie(movieData)
        setResults([]); //Clear the search results
    }
  return (
    <>
      <SearchBar setResults={setResults} input={input} setInput={setInput}/>
      <SearchResults results={results} onMovieClick={handleMovieClick} setInput={setInput}/>
      {selectedMovie ? <MovieInfo /> : <MoviesList  popularMovies={popularMovies}/>}
    </>
  )
}

export default Index
 