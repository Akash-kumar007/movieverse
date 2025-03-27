
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home'
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Trending from "./components/Trending/Trending";
import TopRated from "./components/Top_rated/Top_rated";
import Navbar from "./components/Navbar/Navbar";


function App() {

  return (
  <>
  
      <Navbar/>
  <Routes>
   <Route path='/' element={<Home/>}/> 
   <Route path='/login' element={<Login/>}/>
   <Route path='/Signup' element={<Signup/>}/>
   <Route path='/trending' element={<Trending/>}/>
   <Route path='/top-rated' element={<TopRated/>}/>

  </Routes>
 
        
  </>
  )
}

export default App
