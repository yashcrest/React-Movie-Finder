// this page handles movie detailed view once clicked from homepage
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { TMovieCredit, TMovieData } from "../../types/Index";

const MovieInfo = () => {
  const tmdb_api_key = import.meta.env.VITE_TMDB_API_KEY;
  const omdb_api_key = import.meta.env.VITE_OMDB_API_KEY;
  const { id } = useParams();
  const [imdbRating, setImdbRating] = useState<string | null>(null);
  const [movieDetails, setMovieDetails] = useState<TMovieData | null>(null);
  const [movieCredits, setMovieCredits] = useState<TMovieCredit>({
    cast: [],
    crew: [],
    id: 0,
  });

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?&api_key=${tmdb_api_key}&language=en-US`;
      const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?&api_key=${tmdb_api_key}`;
      const imageUrl = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${tmdb_api_key}`;

      const [detailsResponse, creditsResponse, imageResponse] =
        await Promise.all([
          fetch(detailsUrl),
          fetch(creditsUrl),
          fetch(imageUrl),
        ]);

      const movieData = await detailsResponse.json();
      // console.log("moviedata: ", movieData);
      const creditData = await creditsResponse.json();
      // console.log("creditsData: ", creditData);
      // const imageData = await imageResponse.json(); //still have to figure out how to handle and display this response
      // console.log("imageData: ", imageData);

      //formatting movie date
      const releaseDate = new Date(movieData.release_date).toLocaleDateString(
        "en-GB",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      );

      setMovieDetails(movieData);
      setMovieCredits(creditData);
      fetchImdbRating(movieData.imdb_id);
    };

    fetchMovieDetails();
  }, [id]);

  //cast & director arrays
  const casts = movieCredits.cast.map((cast) => cast.name).join(", ");
  const director = movieCredits.crew.find(
    (person) => person.job === "Director"
  )?.name;

  //imdb rating
  const fetchImdbRating = async (imdb_id: number) => {
    const imdbRatingUrl = `http://www.omdbapi.com/?apikey=${omdb_api_key}&i=${imdb_id}`;
    const response = await fetch(imdbRatingUrl);
    const imdbData = await response.json();
    console.log("omdb data: ", imdbData);
    setImdbRating(imdbData.imdbRating);
  };

  if (!movieDetails) return <div>Loading...</div>; //need to adder spinner instead of this
  return (
    <>
      <Link className="link h2 text-dark" to="/">
        <BiArrowBack />
      </Link>
      <div className="movie-info  mx-auto mb-5">
        <h2 className="movie-name">{movieDetails.original_title}</h2>
        <p className="movie-date">{movieDetails.release_date}</p>
        <img
          className="rounded poster"
          src={`https://image.tmdb.org/t/p/w400/${movieDetails.poster_path}`}
          alt={movieDetails.original_title}
        />
        <p>
          {" "}
          <span className="plot lead">Plot: </span>
          {movieDetails.overview}
        </p>
        <p>
          <span className="cast lead">Cast: </span>
          {casts}
        </p>
        <p>
          <span className="cast lead">Director: </span>
          {director}
        </p>
        <p>
          {" "}
          <span className="plot lead">Genre: </span>
          {movieDetails.genres
            .slice(0, 3)
            .map((genre) => genre.name)
            .join(", ")}
        </p>
        <p>
          <span className="rating lead">IMDB Rating:</span> {imdbRating}{" "}
          <FaStar className="mb-1" />{" "}
        </p>
      </div>
    </>
  );
};

export default MovieInfo;
