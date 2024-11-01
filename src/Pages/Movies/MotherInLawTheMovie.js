import React from "react";
import ReactPlayer from "react-player";

import Video1 from "../videos/mother-in-law-the-movie-trailer.mp4";
import Video1Thumbnail from '../images/thumbnails/mother-in-law-trailer-thumb.png'
import InstagramPhone from "../images/instagram-phone.png"

import "./Movies.css";

import Header from "../../Components/Header";
import MovieSwiper from "../../Components/MovieSwiper";
import BehindTheScenes from "../../Components/BehindTheScenes";
import FeaturedVideos from "../../Components/FeaturedVidoes";
import { NewsItems } from "../../Components/NewsItems";
import { Footer } from "../../Components/Footer";

const MotherInLawTheMovie = () => {
  return (
    <>
      <Header />
      <section className="movieHeroSection">
        <MovieSwiper />
      </section>
      <BehindTheScenes />
      <section className="moviePreview">
        <h3>Official Mother-In-Law The Movie Trailer</h3>
        <div className="container">
          <ReactPlayer
            url={Video1}
            controls={true}
            light={<img src={Video1Thumbnail} alt="" />}
            playing={true}
          />
        </div>
      </section>
      <section className="embla newsItems">
        <NewsItems />
      </section>
      <section className="videos">
        <FeaturedVideos />
      </section>
      <section className="followUs">
        <h3>Follow Us On <span>Instagram</span></h3>
        <div className="imageContainer">
          <img src={ InstagramPhone } alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MotherInLawTheMovie;