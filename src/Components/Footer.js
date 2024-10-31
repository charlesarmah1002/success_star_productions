import React from 'react'

import NameTag from '../images/name.png'

import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="imageContainer">
          <img src={NameTag} alt="" />
        </div>
        <ul>
          <h4>Contact Us</h4>
          <p>
            <i className="ri-map-pin-line"></i>
            <span> Office No. 23 <br /> 12th Avenue, Lincoln Street</span>
            </p>
          <p>
            <a href="tel: +233549708561">
              <i className="ri-phone-line"></i>
              <span> +233 54 970 8561</span>
            </a>
          </p>
          <p>
            <a href="mailto: charlesarmah.dev@gmail.com">
              <i className="ri-at-line"></i>
              <span> info@successstarproductions.com</span>
            </a></p>
        </ul>
      </div>
    </footer >
  )
}
