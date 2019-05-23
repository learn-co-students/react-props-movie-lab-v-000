import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    const movieCards = movieData.map((movie) => 
      <MovieCard title={movie.title} genres={movie.genres} IMDBRating={movie.IMDBRating} poster={movie.poster} />
    );
    return(
      <ul>{movieCards}</ul>
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
