import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./series.css";

function Series() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies?category=series')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  console.log(movies);
  

  return (
    <div className="series-containerw">
      <h1 className="series-titlew">Web Series </h1>
      <div className="movie-gridw">
      {movies.map((movie) => (
  <div key={movie._id} className="movie-cardw">
    <img
  src={
    movie.image?.startsWith("http")
      ? movie.image
      : `http://localhost:5000/${movie.image}`
  }
  alt={movie.name}
  style={{ cursor: "pointer", width: "200px", height: "auto" }}
  onClick={() => navigate(`/watch/${movie._id}`)}
/>

    <h2 className="movie-namew">{movie.name}</h2>
    <p className="movie-datew">Release Date: {movie.releaseDate}</p>
  </div>
))}
      </div>
    </div>
  );
}

export default Series;
