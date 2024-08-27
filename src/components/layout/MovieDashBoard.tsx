import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import MoviesList from "../movies/MoviesList";
import SearchBar from "../movies/SearchBar";
import SearchResults from "../movies/SearchResults";
import MovieInfo from "../movies/MovieInfo";
import { useSearchContext } from "../../contexts/SearchContext";

type MovieData = {};

const MovieDashboard = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);

  const { setResults } = useSearchContext();

  // api call to fetch popular movies
  const fetchMovie = async () => {
    const tmdb_api_key = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdb_api_key}&language=en-US`;
    try {
      const res = await axios.get(url);
      console.log("axios response:", res);
      //   obj with movie data
      const { results } = res.data;
      setPopularMovies(results);
    } catch (err) {
      console.log("Error fetching trending movies:", err);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  //handle click on eachresult
  const handleMovieClick = (movieData) => {
    setSelectedMovie(movieData);
    setResults([]);
  };
  return (
    <>
      <SearchBar />
      <SearchResults onMovieClick={handleMovieClick} />
      {selectedMovie ? (
        <MovieInfo />
      ) : (
        <MoviesList popularMovies={popularMovies} />
      )}
    </>
  );
};

export default MovieDashboard;
