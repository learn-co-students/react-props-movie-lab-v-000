import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    const movieCards = movieData.map((movie,index) =>
    <div key={index}>
      <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} poster={movie.poster} genres={movie.genres} />
      </div>
    );
    return (
      <div>{movieCards}</div>
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
