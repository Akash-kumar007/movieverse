import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css"; // Make sure your custom CSS is in this file

export default function AdminAddMovie() {
  const [movie, setMovie] = useState({
    name: "",
    image: "",
    category: "bollywood",
  });

  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/movies", movie);
    alert("Movie added successfully!");
    setMovie({ name: "", image: "", releaseDate: "", category: "bollywood" });
    fetchMovies(); // Refresh list
  };

  const fetchMovies = async () => {
    const res = await axios.get("http://localhost:5000/api/movies");
    setMovies(res.data);
  };

  const deleteMovie = async (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
      fetchMovies(); // Refresh list after delete
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="admin-container">
      <form onSubmit={handleSubmit} className="admin-form">
        <input
          type="text"
          name="name"
          value={movie.name}
          onChange={handleChange}
          placeholder="Movie Name"
          required
        />
        <input
          type="text"
          name="image"
          value={movie.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
   
        <select name="category" value={movie.category} onChange={handleChange}>
          <option value="bollywood">Bollywood</option>
          <option value="hollywood">Hollywood</option>
          <option value="tollywood">Tollywood</option>
        </select>
        <button type="submit">Add Movie</button>
      </form>

      <div className="movie-list">
        {movies.map((m) => (
          <div key={m._id} className="movie-card">
            <img src={m.image} alt={m.name} />
            <h3>{m.name}</h3>
            <p>Category: {m.category}</p>
            <button onClick={() => deleteMovie(m._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}  