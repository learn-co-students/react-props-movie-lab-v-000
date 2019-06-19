import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    
    // .map over the imported movie data array and render MovieCards for each element.
    // Don't forget to pass all 4 props
    return movieData.map((data, indx) => <MovieCard key={indx} {...data}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()} 
      </div>
    )
  }
}
