import React from 'react'
import './Home.css'
import Slider from '../Slider/Slider'
import Moviesection from '../moviesection/moviesection'
import MovieCard from '../../components/Moviecard/Moviecard'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
  
      <Slider/>
      <Moviesection/>
      <MovieCard/>
      <Footer/>
    </div>

  )
}

export default Home


