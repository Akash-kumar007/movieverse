import React from "react";
import "./Moviesection.css";

const movies = [
  {
    title: "Interstellar",
    image: "https://c4.wallpaperflare.com/wallpaper/536/846/466/interstellar-movie-movies-wallpaper-preview.jpg",
  },
  {
    title: "The Batman",
    image: "https://w0.peakpx.com/wallpaper/307/244/HD-wallpaper-the-batman-movie-poster-art-the-batman-batman-superheroes-movies-2022-movies.jpg",
  },
  {
    title: "Emergency",
    image: "https://vegamovies.ba/uploads/posts/covers/Poster-Emergency-2025.webp",
  },
  {
    title: "Vikram",
    image: "https://vegamovies.ba/uploads/posts/covers/Poster-Vikram-2022.webp",
  },
];

const Moviesection = () => {
  return (
    <div className="movie-poster-container">
      <h2>Featured Movies</h2>
      <div className="poster-grid">
        {movies.map((movie, index) => (
          <div key={index} className="poster-card">
            <img src={movie.image} alt={movie.title} />
            <div className="poster-overlay">
              <p>{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moviesection;
