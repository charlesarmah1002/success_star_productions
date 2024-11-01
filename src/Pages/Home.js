import React from 'react'

import Header from '../Components/Header'
import MovieList from '../Components/MovieList'

import HeroBackground from '../images/background-images/2149837032.jpg'
import LogoType2 from '../images/name.png'
import ArrowDown from '../images/arrow-down.svg'

import './Home.css'

const Home = () => {
  return (
    <>
        <Header />
        <section className="heroSection">
            <div className="background">
                <img src={ HeroBackground} alt="" />
            </div>
            <div className="container">
                <div className="imageContainer">
                    <img src={ LogoType2 } alt="" />
                </div>
                <h3>Celebrating African stories, voices, and visionaries – bringing bold, independent films from Africa to the world.</h3>
                <a href="#movieSection" className="bouncingButton">
                    <img src={ ArrowDown } alt="" />
                </a>
            </div>
        </section>
        <section className="movieList" id='movieSection'>
            <MovieList />
        </section>
    </>
  )
}

export default Home;