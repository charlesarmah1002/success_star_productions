import React from "react";
import ReactPlayer from "react-player";
// import useEmblaCarousel from "embla-carousel-react";

import Header from "../Components/Header";
import MovieSwiper from "../Components/MovieSwiper";

import Video1 from "../videos/mother-in-law-the-movie-trailer.mp4";

import "./Home.css";
import BehindTheScenes from "../Components/BehindTheScenes";

const Home = () => {
  return (
    <>
      <Header />
      <section className="heroSection">
        <MovieSwiper />
      </section>
      <section className="featured">
          <BehindTheScenes/>
      </section>
      <section className="moviePreview">
        <div className="container">
          <ReactPlayer url={Video1} volume={0} muted={true} controls={true} />
        </div>
      </section>
      <section className="videos">
        
      </section>
    </>
  );
};

export default Home;