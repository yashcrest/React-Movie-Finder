import React from "react";
import { useNavigate } from "react-router-dom";

const EachResult = ({ result, setInput }) => {
  const navigate = useNavigate();
  const clicked = async () => {
    navigate(`movie/${result.id}`);
    setInput(""); //Clear the input field using React state management
  };

  const posterURL = `https://image.tmdb.org/t/p/w500/${result.poster_path}`;
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
