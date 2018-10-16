import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

    // map over your movieData array and return the correct
  generateMovieCards = () => {
    return movieData.map((data, index) => <MovieCard key={index} {...data} />);
  };

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
