import React from 'react'

import useEmblaCarousel from 'embla-carousel-react'

import BestIndependentFilmNomination from '../images/news-images/best-independent-film-nomination.jpeg'
import BestIndependentDirectorNomination from '../images/news-images/best-director-in-an-independent-film.jpeg'

import './Embla.css'

export const NewsItems = () => {
  const options = { align: 'start' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <>
      <h3>News</h3>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide newsItem">
            <div className="imageContainer">
              <img src={ BestIndependentFilmNomination } alt="This is the image" />
            </div>
            <div className="content">
              <h4>Mother-In-Law The Movie Gets Nomination</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti a praesentium omnis voluptate accusantium voluptatibus optio distinctio inventore numquam quasi, doloribus excepturi, maxime aliquam obcaecati ad illum vitae, quisquam reprehenderit animi ea deserunt nisi fugit perferendis. Minima molestias molestiae soluta?</p>
            </div>
          </div>
          <div className="embla__slide newsItem" title='Mother-In-Law Director Nominated for Best Director for Indepedent Film (Africa)'>
            <div className="imageContainer">
              <img src={ BestIndependentDirectorNomination } alt="This is the image" />
            </div>
            <div className="content">
              <h4>Mother-In-Law Director Nominated for Best Director for Indepedent Film (Africa)</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti a praesentium omnis voluptate accusantium voluptatibus optio distinctio inventore numquam quasi, doloribus excepturi, maxime aliquam obcaecati ad illum vitae, quisquam reprehenderit animi ea deserunt nisi fugit perferendis. Minima molestias molestiae soluta?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
