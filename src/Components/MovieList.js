import React from 'react'

import './MovieList.css'

const MovieList = () => {

    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../images/movie-posters', false, /\.(png|jpe?g|svg)$/));

  return (
    <>
        <div className="movieList container">
        {images.map((image, index) => (
            <div className="movie imageContainer" key={index}>
              <img src={image} alt={`Slide ${index + 1}`}/>
            </div>
          ))}
        </div>
    </>
  )
}

export default MovieList