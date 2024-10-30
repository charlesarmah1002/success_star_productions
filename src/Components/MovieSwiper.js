import React from 'react'
import './MovieSwiper.css'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import Image1 from '../images/characters.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MovieSwiper = () => {
    return (
        <div className='swiperContainer'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="container">
                        <div className='left'>
                            <h2>Mother-In-Law</h2>
                            <p className="timeAndDate">1hr 35min | Sept. 2024</p>
                            <p className="summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut eaque est, repudiandae optio modi rem praesentium sunt sed porro ipsa accusamus exercitationem debitis error tempore dolorum amet sit! Perferendis?</p>
                            <div className="buttons">
                                <button className='watchNowButton'>
                                    <i className='ri-play-fill'></i>
                                    <span>Watch Now</span>
                                </button>
                                <button className='trailerButton'>
                                    <i className='ri-clapperboard-line'></i>
                                    <span>Trailer</span>
                                </button>
                            </div>
                        </div>
                        <div className='imageContainer'>
                            <img src={Image1} alt='logo' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MovieSwiper
