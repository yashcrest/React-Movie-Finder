import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import MoviesList from "../movies/MoviesList";
import SearchBar from "../movies/SearchBar";
import SearchResults from "../movies/SearchResults";
import MovieInfo from "../movies/MovieInfo";
import { useSearchContext } from "../../contexts/SearchContext";
import { TrendingMoviesData } from "../../types/Index";

const MovieDashboard = () => {
  const [selectedMovie, setSelectedMovie] = useState<TrendingMoviesData | null>(
    null
  );
  const [popularMovies, setPopularMovies] = useState<TrendingMoviesData[]>([]);

  const { setMovies, setInput } = useSearchContext();

  // api call to fetch popular movies
  const fetchMovie = async () => {
    const tmdb_api_key = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdb_api_key}&language=en-US`;
    try {
      const res = await axios.get(url);
      //   obj with movie data
      const { results } = res.data;
      console.log("popular movies: ", results);
      console.log(res.data);
      setPopularMovies(results);
    } catch (err) {
      console.log("Error fetching trending movies:", err);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  //handle click on eachresult
  const handleMovieClick = (TrendingMoviesData: TrendingMoviesData) => {
    setSelectedMovie(TrendingMoviesData);
    setMovies([]);
    setInput("");
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
