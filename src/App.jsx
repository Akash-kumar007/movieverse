
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
import Trending from "./components/Trending/Trending";
import Navbar from "./components/Navbar/Navbar";
import South from "./components/South/South";
import Hindi from "./components/Hindi/Hindi";
import Hollywood from "./components/Hollywood/Hollywood";
import Series from "./components/Series/Series";
import AdminAddMovie from './components/AdminPanel/AdminPanel';
import MoviePlayer from './components/MoviePlayer/MoviePlayer';



function App() {

  return (
  <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={< AdminAddMovie/>} />
        <Route path="/trending" element={< Trending/>} />
        <Route path="/Hollywood" element={< Hollywood/>} />
        <Route path="/south" element={<South/>} />
        <Route path="/hindi" element={< Hindi/>} />
        <Route path="/Web-Series" element={<Series />} />
        <Route path="/watch/:id" element={<MoviePlayer />}/> 
        
      </Routes>
   
 
  </>
  )
}

export default App
