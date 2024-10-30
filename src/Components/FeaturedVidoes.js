import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import './Embla.css'

const FeaturedVideos = (props) => {
  const options = { align: 'start' }

  // Dynamically import images from the specified folder
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../images/behind-the-scenes', false, /\.(png|jpe?g|svg)$/));

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__controls">
        <h3>Behind The Scenes</h3>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="embla__slide__img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedVideos
