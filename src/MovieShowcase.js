import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    const movies = movieData.map((mov) =>
    <MovieCard title={mov.title} IMDBRating={mov.IMDBRating} genres={mov.genres} poster={mov.poster}/>
  );
  // debugger
  return (
      movies
  );

  }

  render() {

    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
