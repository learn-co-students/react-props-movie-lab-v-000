import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {

  return movieData.map((movie, idx) =>
      < MovieCard key={idx} {...movie}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

//.map over the imported movie data array and render MovieCards for each element. (see documentaion)
//Don't forget to pass all 4 props
