import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../../contexts/SearchContext";

const EachResult = ({ result, onMovieClick }) => {
  const posterURL = `https://image.tmdb.org/t/p/w500/${result.poster_path}`;
  const { setInput } = useSearchContext();
  const navigate = useNavigate();
  const clicked = async () => {
    onMovieClick(result);
    navigate(`movie/${result.id}`);
    setInput(""); //Clear the input field using React state management
  };

  return (
    <div className="each-result" onClick={clicked}>
      <img
        src={posterURL}
        alt={result.title}
        style={{ width: "70px", height: "100px", marginRight: "20px" }}
      />
      {result.title}
    </div>
  );
};

export default EachResult;
