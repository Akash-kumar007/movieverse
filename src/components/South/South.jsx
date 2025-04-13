import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./South.css";

function South() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies?category=tollywood')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  console.log(movies);
  

  return (
    <div className="south-containers">
      <h1 className="south-titles">Tollywood Movies </h1>
      <div className="movie-grids">
      {movies.map((movie) => (
  <div key={movie._id} className="movie-cards">
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

    <h2 className="movie-names">{movie.name}</h2>
    <p className="movie-dates">Release Date: {movie.releaseDate}</p>
  </div>
))}
      </div>
    </div>
  );
}

export default South;
