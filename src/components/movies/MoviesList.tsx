// displays all movies in cart view in homepage
import { TrendingMoviesData } from "../../types/Index";
import { MovieCard } from "./MovieCard";

type MovieListProps = {
  popularMovies: TrendingMoviesData[];
};

const MoviesList = ({ popularMovies }: MovieListProps) => {
  return (
    <div className="movies">
      <h1 className="text-center m-5 title">Trending Movies</h1>
      <div className="row d-flex g-5">
        {popularMovies.map((movie, id) => (
          <div className="col-lg-4 mh-25" key={id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
