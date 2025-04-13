import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Hollywood.css";

function Hollywood() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies?category=hollywood')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  console.log(movies);
  

  return (
    <div className="hollywood-containerh">
      <h1 className="hollywood-titleh">Hollywood Movies</h1>
      <div className="movie-gridh">
      {movies.map((movie) => (
  <div key={movie._id} className="movie-cardh">
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

    <h2 className="movie-nameh">{movie.name}</h2>
    <p className="movie-dateh">Release Date: {movie.releaseDate}</p>
  </div>
))}
      </div>
    </div>
  );
}

export default Hollywood;
