import React from "react";
import "./Trending.css";

const movies = [
  // Hollywood Movies Released in 2024-2025
  { id: 1, name: "Godzilla x Kong: The New Empire", date: "March 29, 2024", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Fmi4kYQvo_Kr6csdN284Wm2o6-zu8ciUDw&s" },
  { id: 2, name: "Venom: The Last Dance", date: "December 10, 2024", image: "https://www.sonypictures.in/sites/india/files/2024-09/VNM3_INTL_OnLine_6072x9000_TSR_01_1mb.jpg" },
  { id: 3, name: "The Best Christmas Pageant Ever", date: "December 10, 2024", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFyVTlsbql7y6-NxFCr2xeC6yf1uOp6B_cg&s" },
  { id: 4, name: "Dune: Part Two", date: "March 1, 2024", image: "https://m.media-amazon.com/images/I/71cS3aGfH0L.jpg" },
  { id: 5, name: "Deadpool & Wolverine", date: "July 26, 2024", image: "https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg" },
  { id: 6, name: "Mad Max: Furiosa", date: "May 24, 2024", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HLmp5Je7Lb7tFl7l27H_1wiBmQO85eY8Wg&s" },
  
  // Bollywood Movies Released in 2024-2025
  { id: 7, name: "Bade Miyan Chote Miyan", date: "April 10, 2024", image: "https://m.media-amazon.com/images/M/MV5BMDE4Yzc3YTctODE5My00Mjg3LWI0ZDktZjM4MmVkMTQ3ZmNmXkEyXkFqcGc@._V1_.jpg" },
  { id: 8, name: "Singham Again", date: "August 15, 2024", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQky_9JCt3z3k9NcqrdjL7fiAygJ4GoEGrA&s" },
  { id: 9, name: "Kalki 2898 AD", date: "May 9, 2024", image: "https://dx35vtwkllhj9.cloudfront.net/prathyangira-cinemas/kalki-2898-ad/images/regions/us/onesheet.jpg" },
  { id: 10, name: "Fighter", date: "January 25, 2024", image: "https://m.media-amazon.com/images/M/MV5BYmJiYzZhOTktNGIzNy00YjljLWI3ZDgtZGU2YWMzNGQ1YjQ5XkEyXkFqcGc@._V1_.jpg" },
  { id: 11, name: "Chandu Champion", date: "June 14, 2024", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsu2ZGJYNAsfcYj87t4-ZJDHO_MRTbAnrNg&s" },
  { id: 12, name: "The Sabarmati Report", date: "May 3, 2024", image: "https://m.media-amazon.com/images/M/MV5BM2U3OGIzOTYtYjA1OS00ODc0LWJlMGUtYTE2NzlkN2ZjMTNiXkEyXkFqcGc@._V1_.jpg" },
  
  // Tollywood Movies Released in 2024-2025
  { id: 13, name: "Pushpa 2: The Rule", date: "August 15, 2024", image: "https://m.media-amazon.com/images/M/MV5BZjllNTdiM2QtYjQ0Ni00ZGM1LWFlYmUtNWY0YjMzYWIxOTYxXkEyXkFqcGc@._V1_.jpg" },
  { id: 14, name: "Hari Hara Veera Mallu", date: "March 28, 2025", image: "https://m.media-amazon.com/images/M/MV5BMTBmY2E0MmYtMGVkNi00OTljLTkwZTYtZTFlMGMwNzIzZmE4XkEyXkFqcGc@._V1_.jpg" },
  { id: 15, name: "Salaar: Part 1 – Ceasefire", date: "December 22, 2024", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_h3Tx-0t5vEDnz0lWVddXvFRVHT2OpuhTRkVTTYMnCoJseKweFzg0hZ7M0Y0tyVMDwY&usqp=CAU" },
  { id: 16, name: "Devara: Part 1", date: "April 5, 2024", image: "https://m.media-amazon.com/images/M/MV5BZWEwNmYwYTAtMmQxYS00ZTgwLWE0NmUtNGIwZDEyZmYwN2EwXkEyXkFqcGc@._V1_.jpg" },
  { id: 17, name: "Guntur Kaaram", date: "January 12, 2024", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdgoR72rav48YhSahtHBMjQrdP8HWfxzwkA&s" },
  { id: 18, name: "Marco", date: "December 20, 2024", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjjEOr5IpnYoaDNfX80zuB93XOiQjcVq4ELvgnSiUcRY4iNQn1lHTdV5rcYMMrHneLFQ&usqp=CAU" },
  { id: 19, name: "Hanu-Man", date: "January 12, 2024", image: "https://i.pinimg.com/736x/75/2d/29/752d29e9d9cb839a8fc8fb5acd064bad.jpg" },
  { id: 20, name: "Game Changer", date: "September 2024", image: "https://preview.redd.it/gamechanger-first-look-poster-v0-vnshdy2omaqa1.jpg?width=1080&crop=smart&auto=webp&s=d002b8374f77fe45b3da0fe4895b924b5628067a" }
];

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.name} className="movie-image" />
      <div className="movie-overlay">
        <h2 className="movie-title">{movie.name}</h2>
        <p className="movie-date">{movie.date}</p>
      </div>
    </div>
  );
};

const Trending = () => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Trending;
