import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import MovieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return MovieData.map(obj => <MovieCard card={obj}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
