import React from 'react'
import Header from '../Components/Header'
import MovieSwiper from '../Components/MovieSwiper'

import Video1 from '../videos/video1.mp4'
import Image01 from '../images/image-2.jpg'

import './Home.css'
import ReactPlayer from 'react-player'

const Home = () => {
  return (
    <>
      <Header />
      <section className='heroSection'>
        <MovieSwiper />
      </section>
      <section className='featured'>
        <div className='imageContainer'>
          <img src='' alt='' />
        </div>
        <div className='imageContainer'>
          <img src='' alt='' />
        </div>
        <div className='imageContainer'>
          <img src='' alt='' />
        </div>
      </section>
      <section className='moviePreview'>
        <div className='container'>
          <ReactPlayer
            url={Video1}
            controls={true}
          />
        </div>
      </section>
      <section className='videos'>
        <h3>Videos</h3>
        <div className='container'>
          <div className='imageContainer'>
            <img src={Image01} alt='' />
          </div>
          <div className='imageContainer'>
            <img src={Image01} alt='' />
          </div>
          <div className='imageContainer'>
            <img src={Image01} alt='' />
          </div>
          <div className='imageContainer'>
            <img src={Image01} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home