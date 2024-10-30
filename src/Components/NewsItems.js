import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import Image from '../images/image-2.jpg'

import './Embla.css'

export const NewsItems = () => {
  const options = { align: 'start' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide newsItem">
            <div className="imageContainer">
              <img src={Image} alt="This is the image" />
            </div>
            <div className="content">
              <h4>Mother-In-Law The Movie Gets Nomination</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
