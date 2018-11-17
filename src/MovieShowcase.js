import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard';
import movieData from './data';

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(x => <MovieCard title={x.title} IMDBRating={x.IMDBRating} genres={x.genres} poster={x.poster} />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
