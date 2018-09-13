import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard'
import movieData from './data'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(element =>
      <MovieCard title={element.title} IMDBRating={element.IMDBRating} poster={element.poster} genres={element.genres}/>
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
