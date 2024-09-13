import { useNavigate } from "react-router-dom";
import { TrendingMoviesData, OnMovieClick } from "../../types/Index";

type EachResultProps = {
  movie: TrendingMoviesData;
  onMovieClick: OnMovieClick;
};

const EachResult = ({ movie, onMovieClick }: EachResultProps) => {
  const posterURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigate = useNavigate();
  const clicked = async () => {
    onMovieClick(movie);
    navigate(`movie/${movie.id}`);
    // console.log("each movie:", movie);
  };

  return (
    <div className="each-result" onClick={clicked}>
      <img
        src={posterURL}
        alt={movie.title}
        style={{ width: "70px", height: "100px", marginRight: "20px" }}
      />
      {movie.title}
    </div>
  );
};

export default EachResult;
