import { useNavigate } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    //handle movie Click in homepage
    const handleMovieClick = (movieId: number) => {
        navigate(`/movie/${movieId}`);
    };
    return (
        <div
            className="card p-3"
            onClick={() => handleMovieClick(movie.id)}
        >
            <h3 className="text-center">{movie.title || movie.name}</h3>
            <div className="movie-list">
                <img
                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                    alt={movie.title}
                    className="img-fluid"
                />
                <p className="mt-4">
                    <span className="bold">Plot: </span>
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}

