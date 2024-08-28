// this page handles movie detailed view once clicked from homepage
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

const MovieInfo = () => {
  const { id } = useParams(); //very useful feature of react-router-dom
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const tmdb_api_key = import.meta.env.VITE_TMDB_API_KEY;
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
      // console.log("moviedata", movieData);
      const creditData = await creditsResponse.json();
      const imageData = await imageResponse.json(); //still have to figure out how to handle and display this response

      //filtering result from API before passing to "setMovie"
      const director = creditData.crew.find(
        (person) => person.job === "Director"
      );
      const cast = creditData.cast
        .slice(0, 5)
        .map((person) => person.name)
        .join(", "); //getting first 5 casts

      //formatting movie date
      const releaseDate = new Date(movieData.release_date).toLocaleDateString(
        "en-GB",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      );

      setMovie({
        ...movieData,
        director: director ? director.name : "N/A",
        cast: cast,
        releaseDate: releaseDate,
      });
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;
  return (
    <>
      <Link className="link h2 text-dark" to="/">
        <BiArrowBack />
      </Link>
      <div className="movie-info  mx-auto mb-5">
        <h2 className="movie-name">{movie.original_title}</h2>
        <p className="movie-date">{movie.releaseDate}</p>
        <img
          className="rounded poster"
          src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          alt={movie.original_title}
        />
        <p>
          {" "}
          <span className="plot lead">Plot: </span>
          {movie.overview}
        </p>
        <p>
          <span className="cast lead">Cast: </span>
          {movie.cast}
        </p>
        <p>
          <span className="cast lead">Director: </span>
          {movie.director}
        </p>
        <p>
          {" "}
          <span className="plot lead">Genre: </span>
          {movie.genres
            .slice(0, 3)
            .map((genre) => genre.name)
            .join(", ")}
        </p>
        <p>
          <span className="rating lead">IMDB Rating:</span> {movie.imdbRating}{" "}
          <FaStar className="mb-1" />{" "}
        </p>
      </div>
    </>
  );
};

export default MovieInfo;
