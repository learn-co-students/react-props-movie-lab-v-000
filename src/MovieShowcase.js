import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
   const movies = movieData.map((movie) => 
      {movie.props.title},
      {movie.props.IMDBRating},
      {movie.props.genres},
      {movie.props.poster}
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
