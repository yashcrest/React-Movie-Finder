import { FaSearch } from "react-icons/fa";
import { useSearchContext } from "../../contexts/SearchContext";

const SearchBar = () => {
  const { input, setInput, setMovies, setHasSearched, setErrorMessage } =
    useSearchContext();

  //fetching movie data from TMDB
  const fetchData = async (value: string) => {
    const api_key = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${value}&language=en-US`;
    try {
      const res = await fetch(url); // convert to axios later

      if (!res.ok) {
        console.log(res);
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      const { results } = data;

      console.log("all the results : ", results);
      console.log("actual data object : ", data);


      if (results.length === 0) {
        setErrorMessage("No results found. Please Enter a valid movie name.");
        setMovies([]);
      } else {

        setMovies(results);
        setErrorMessage("");
      }
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
    setHasSearched(true);
    if (value.trim()) {
      fetchData(value);
    } else {
      setMovies([]);
      setErrorMessage("");
    }
  };

  return (
    <div className="search-bar">
      <FaSearch color="grey" size={30} />
      <input
        className="input"
        type="text"
        placeholder="Search a Movie..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
