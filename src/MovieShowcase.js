import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    movieData.map((movie) => 
    return (
      movieData.map((movie) => 
      <div id="movie-card">
          <MovieCard movieArray={movie} />
          movie
      </div>
      )
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
