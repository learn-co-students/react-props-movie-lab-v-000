import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    
    return movieData.map((movie) => <MovieCard {...movie}/>) //{...movie} adds props to object
    // return movieData.map(movie => <MovieCard info={movie}/>) {info={movie} nests the props under a new key (info)}
  }

  render() {

    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

