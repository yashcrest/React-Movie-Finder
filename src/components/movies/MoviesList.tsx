// displays all movies in cart view in homepage
import { useNavigate } from "react-router-dom";

const MoviesList = ({ popularMovies }) => {
  const navigate = useNavigate();

  //handle movie Click in homepage
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="movies">
      <h1 className="text-center m-5 title">Trending Movies</h1>
      <div className="row d-flex g-5">
        {popularMovies.map((movie, id) => (
          <div className="col-lg-4 mh-25" key={id}>
            <div
              className="card p-3"
              onClick={() => handleMovieClick(movie.id)}
            >
              <h3 className="text-center">{movie.title || movie.name}</h3>
              <div className="movie-list">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="img-fluid"
                />
                <p className="mt-4">
                  <span className="bold">Plot: </span>
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
