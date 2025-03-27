import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  const slides = [
    { image: "https://c4.wallpaperflare.com/wallpaper/831/158/498/action-car-crime-custom-wallpaper-preview.jpg" },
    { image: "https://w0.peakpx.com/wallpaper/307/244/HD-wallpaper-the-batman-movie-poster-art-the-batman-batman-superheroes-movies-2022-movies.jpg" },
    { image: "https://c4.wallpaperflare.com/wallpaper/536/846/466/interstellar-movie-movies-wallpaper-preview.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? "active" : ""}`}>
            <img src={slide.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
