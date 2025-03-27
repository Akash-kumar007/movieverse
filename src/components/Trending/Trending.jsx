// import React from "react";
// import "./Trending.css";

// const Trendingmovies = [
//   {
//     title: "Chhaava",
//     date: "21 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nmvyr7XiKDW3m8jBeLSMeDTRpttvSSeSVA&s",
//     link: "https://www.imdb.com/title/tt1234567/"
//   },
//   {
//     title: "Marco",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://m.media-amazon.com/images/M/MV5BMDNkZmZlOWEtMjIxYS00MzMwLTg4ODYtMDRmNzY2NjY3NDdkXkEyXkFqcGc@._V1_.jpg",
//     link: "https://www.imdb.com/title/tt2345678/"
//   },
//   {
//     title: "Retro",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://static.moviecrow.com/gallery/20250114/240219-Retro%20Suriya%20Jayaram%20Karunakaran%20Pongal%202025%20Poster%20Karthik%20Subbaraj.jpg",
//     link: "https://www.imdb.com/title/tt3456789/"
//   },
//   {
//     title: "Interstellar",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://lh6.googleusercontent.com/proxy/NRxbWaO4joOZS6UfQnxNrHhYCLilDWNOLigisOtfTqsknaVLkWdmIM3DQDky2l_uEzXlmLT7xJ-hApzek6u10Sptyo58Vu_ucTzL",
//     link: "https://www.imdb.com/title/tt0816692/"
//   },  {
//     title: "DeadPool & Wolverine",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg"
//   },  {
//     title: "Dragon",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/b77Su1i74L28InBsyaFlfWPDpeE.jpg"
//   },  {
//     title: "Bhool Bhulaiyaa 3 (2024) ",
//     date: "20 Mar 2024",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://imb.rest/wp-content/uploads/2024/11/image-2024-11-02T211300.837.webp"
//   },  {
//     title: "Devara : Part 1 (2024)",
//     date: "20 Mar 2024",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/u46N3WC11mR5vAFPcVbHg7WK05f.jpg"
//   },  {
//     title: "Crazxy (2025) ",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://imb.rest/wp-content/uploads/2025/02/nWxEtbryAPP7gI0TtNYejoAUJlr.jpg"
//   },  {
//     title: "The Diplomat (2025)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/uwl9Y4px8TTIQK4N19k6gnW1RnX.jpg"
//   }, 
//   {
//     title: "Emergency (2025)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/yp5eg70g6LaZoBiApOv9oerzvvX.jpg"
//   },
//   {
//     title: "Shaitaan (2024)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/nCK46DFCOMInVfSLraWDEOhMciE.jpg"
//   },
//   {
//     title: "Stree 2 (2024)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/zgxpT5Q5pe3FtL99F0UOIglPGrQ.jpg"
//   },
//   {
//     title: "Kalki 2898 – AD (2024)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/rstcAnBeCkxNQjNp3YXrF6IP1tW.jpg"
//   },
//   {
//     title: "(Pri)sons (2024) ",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/nWII5qq7VPwgrHI4otsRWLsYyRb.jpg"
//   },
//   {
//     title: "Swag (2024) ",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/59j909O4PVE7vZxFU0JzuDzLuo7.jpg"
//   },
//   {
//     title: "Agent (2023)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/eeIZPzcDXQOainfNSp0MNbcv34g.jpg"
//   },
//   {
//     title: "The Twister: Caught in the Storm (2025)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/ggXb37lX9gW4SR7kpMaraXDFeFR.jpg"
//   },
//   {
//     title: "Pushpa 2 – The Rule (2024)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/1T21FblunT0y8fz7YaW8JMYgUKm.jpg"
//   },
//   {
//     title: "Vanvaas (2024)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/tVD0S5upBwMedBMZuf1aloUrDwY.jpg"
//   },
  
//   {
//     title: "Demon City (2025)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/3edgGAzjzaZwMcvEiTFElIztmF2.jpg"
//   },
//   {
//     title: "Sabdham (2025)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/A9iUVHhwIIg2UaOF08x6FNVNTCH.jpg"
//   },
//   {
//     title: "Khel Khel Mein (2024)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/32P0oQf41HXbENRGtu2h0rqBF2k.jpg"
//   },
//   {
//     title: "Good Will Hunting (1997) ",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/bABCBKYBK7A5G1x0FzoeoNfuj2.jpg"
//   },
//   {
//     title: "Boudica: Queen of War ",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://vegamovies.sl/uploads/posts/covers/Poster-Boudica-Queen-of-war-2023.webp"
//   },
//   {
//     title: "Lucifer(2019)",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://vegamovies.sl/uploads/posts/covers/Poster-Lucifer-2019.webp"
//   },
//   {
//     title: "Vikram 2022",
//     date: "20 Mar 20",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://vegamovies.sl/uploads/posts/covers/Poster-Vikram-2022.webp"
//   },
//   {
//     title: "The Fire Inside 2024",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://vegamovies.sl/uploads/posts/covers/Poster-The-fire-inside-2024.webp"
//   },
//   {
//     title: "Badnaam 2025",
//     date: "20 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://vegamovies.sl/uploads/posts/covers/Poster-Badnaam-2025.webp"
//   },
//   {
//     title: "Officer on Duty (2025)",
//     date: "19 Mar 2025",
//     quality: "WEB-DL 720p - 480p - 1080p",
//     image: "https://image.tmdb.org/t/p/w185/ucwirgaK4v9ylQyDkwoXJtDIlf7.jpg"
  
// }
// ];

// const Trending = () => {
//   return (
//     <div className="movie-container">
//       <h2 className="movie-heading">Movies</h2>
//       <div className="movie-list">
//         {Trendingmovies.map((movie, index) => (
//           <a key={index} href={movie.link} target="_blank" rel="noopener noreferrer" className="movie-card">
//             <div className="movie-overlay">
//               <img src={movie.image} alt={movie.title} className="movie-image" />
//               <div className="movie-details">
//                 <p className="movie-date">{movie.date}</p>
//                 <h3 className="movie-title">{movie.title}</h3>
//                 <p className="movie-quality">{movie.quality}</p>
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default Trending;




import React, { useEffect, useState } from "react";
import "./Trending.css";

const Trending = () => {
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
    fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);  // ✅ Set movies correctly
        setLoading(false); // ✅ Stop loading when data is ready
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
    <div className="trending-container">
      {movies.map((movie) => (
        <div key={movie.id} className="trending-card">
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

export default Trending;

