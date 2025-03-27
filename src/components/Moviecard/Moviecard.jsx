import React, { useEffect, useState } from "react";
import "./Moviecard.css";

const Moviecard = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzA4NWI3NjhjZWJmZjc5MDY5ZTI3MTM4NWIwNDM5YSIsIm5iZiI6MTc0MjY0NDc1OS43ODU5OTk4LCJzdWIiOiI2N2RlYTYxNzRhYTk2NmNlOGM2OWMwMDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ocHSuKzcWhCvUN7sjgLtFMu33paC2nhZfiYg2AGWEZg"
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"`, options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results); 
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <h2>Loading movies...</h2>;
  }

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noopener noreferrer">
            Watch Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default Moviecard;
