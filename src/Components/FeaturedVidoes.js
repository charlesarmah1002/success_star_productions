import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import Image1 from '../images/image-2.jpg'

import './Embla.css'

const FeaturedVideos = (props) => {
  const options = { align: 'start' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla featuredVideos">
      <div className="embla__controls">
        <h3>Featured Videos</h3>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide video">
            <div className="imageContainer">
              <img src={ Image1 } alt="" />
            </div>
            <p>Scenes from movie premiere</p>
          </div>
          <div className="embla__slide video">
            <div className="imageContainer">
              <img src={ Image1 } alt="" />
            </div>
            <p>Scenes from movie premiere</p>
          </div>
          <div className="embla__slide video">
            <div className="imageContainer">
              <img src={ Image1 } alt="" />
            </div>
            <p>Scenes from movie premiere</p>
          </div>
          <div className="embla__slide video">
            <div className="imageContainer">
              <img src={ Image1 } alt="" />
            </div>
            <p>Scenes from movie premiere</p>
          </div>
          <div className="embla__slide video">
            <div className="imageContainer">
              <img src={ Image1 } alt="" />
            </div>
            <p>Scenes from movie premiere</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedVideos
