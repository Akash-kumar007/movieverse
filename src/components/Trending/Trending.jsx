import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Trending.css";

function Trending() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies?category=trending')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  console.log(movies);
  

  return (
    <div className="trending-containert">
      <h1 className="trending-titlet">Trending Movies </h1>
      <div className="movie-gridt">
      {movies.map((movie) => (
  <div key={movie._id} className="movie-cardt">
    <img
  src={
    movie.image?.startsWith("http")
      ? movie.image
      : `http://localhost:5000/${movie.image}`
  }
  alt={movie.name}
  style={{ cursor: "pointer", width: "200px", height: "300px" }}
  onClick={() => navigate(`/watch/${movie._id}`)}
/>

    <h2 className="movie-namet">{movie.name}</h2>
    <p className="movie-datet">Release Date: {movie.releaseDate}</p>
  </div>
))}
      </div>
    </div>
  );
}

export default Trending;
